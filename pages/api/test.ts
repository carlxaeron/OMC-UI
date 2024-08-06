import type { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer';
import db from './../../database';
 
type ResponseData = {
  message: string,
  data: any
}

async function scrapeQuiz(page:any) {
  const questionSelector = await page.locator('[xqa*="MCQuestion"]').waitHandle();
  const d = await questionSelector?.evaluate((el: Element) => {
    let answers:any = [];
    el.querySelectorAll('fieldset label').forEach((label: Element) => {
      const text = label?.textContent?.replaceAll('CorrectCorrect', '').replaceAll('IncorrectIncorrect', '') || '';
      answers.push({ text, isCorrect: label?.textContent?.includes('Correct') });
    });
    return {
      rationale: el.querySelector('div:nth-child(1) > h2 + div')?.innerHTML,
      question: el.querySelector('._2sv26PNy > div')?.innerHTML,
      answers,
    }
  });
  return d;
}

async function scrapeData(props:{ 
  categoryId: number | number[] | undefined,
  quizId: number | number[] | undefined,
}) {
  try {
    const loginUrl = 'https://apics.partnerrc.com/am/@@login'; // Login URL
    const exploreUrl = 'https://apics.partnerrc.com/cscp2023/explore'; // Replace with the URL to scrape
    const DEBUG = typeof process.env.DEBUG === 'string' ? (process.env.DEBUG == 'true' ? true : false) : true;

    const browser = !DEBUG ? await puppeteer.launch() : await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();

    await page.setJavaScriptEnabled(true);
    await page.setViewport({width: 1280, height: 1024});

    // Retrieve cookies from the database
    const cookies = await new Promise<any[]>((resolve, reject) => {
      db.all("SELECT * FROM tbl_cookie", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });

    if (cookies.length > 0) {
      page.setCookie(...cookies.map(cookie => ({
        name: cookie.name,
        value: cookie.value,
        domain: cookie.domain,
        path: cookie.path,
        expires: cookie.expires,
        size: cookie.size,
        httpOnly: !!cookie.httpOnly,
        secure: !!cookie.secure,
        session: !!cookie.session,
        // sameSite: cookie.sameSite
      })));
    }

    // Check if cookies are already set
    const cookiess = await page.cookies();
    const isLoggedIn = cookiess.filter(cookie => cookie.name === '__ac').length ? true : false; // Replace 'your_cookie_name' with the actual cookie name
    // return {data: isLoggedIn};
    if (!isLoggedIn) {
      await page.goto(loginUrl);
      await page.type('input[name="login"]', 'chanokpim.ch'); // Replace with the correct selector and your username
      await page.type('input[name="password"]', 'Password2524'); // Replace with the correct selector and your password

      await page.click('[type="submit"]'); // Replace with the correct selector for the login button

      await page.locator('text/Choose Product').waitHandle();
      await page.evaluate(() => {
        document.querySelector('.product-apicscscp_v2023')?.scrollIntoView({ behavior: 'smooth' });
      });

      await page.locator('.btn-begin').click(); 
    } else {
      await page.goto(exploreUrl);
    }
    
    let gscnData:any[] = [];
    const gscnPSelector = `._2w-kjWxO >div:nth-child(${props.categoryId})`;
    if(props.categoryId) {
      const gscnSelector = await page.locator(gscnPSelector + ' [xqa*=domain]').waitHandle();
      await gscnSelector.click();
    } else {
      const gscnSelector = await page.locator('._2w-kjWxO').waitHandle();
      gscnData = await gscnSelector?.evaluate((el: Element) => {
        return Array.from(el.querySelectorAll('[xqa*=domain]')).map((div: any, i: number) => {
          return { 
            title: div.innerText, 
            data: JSON.stringify({ xqa: div.getAttribute('xqa') }), 
          };
        });
      });
    }

    if(props.categoryId) await page.locator(`${gscnPSelector}[class*="_3bMNCRqJ"]`).waitHandle();
    
    let quiz: any[] = [];
    let data: any[] = [];
    const quizzesSeletor = `[xqa="accordion"]`;
    if(props.quizId) {
      const quizzesData = await new Promise<any[]>((resolve, reject) => {
        db.all("SELECT * FROM tbl_quiz where category_id = ?", props.categoryId || 1, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });
      const selectedQuiz = quizzesData.filter((quiz: any, quizI) => (quizI + 1) === props.quizId)[0];

      if(props.quizId !== 1) {
        const quizS = await page.locator(`${quizzesSeletor} article:nth-child(${props.quizId})`).waitHandle()
        await quizS.click();
      }
      const quizSelector = await page.locator(`${quizzesSeletor} article:nth-child(${props.quizId}) section [xqa="quiz-action-button"] > *:last-child`).waitHandle();
      await quizSelector.scrollIntoView();
      await quizSelector.click();
      const quizPageSelector = await page.locator('[xqa="progression question-feedback"]').waitHandle();
      
      // Check if the quiz has a begin button
      let quizPageType: any = {};
      try {
        await Promise.race([
          page.locator('[xqa="progression question-feedback"] [xqa="action begin"]').waitHandle(),
          new Promise((resolve) => setTimeout(resolve, 10000))
        ]);
        const hasBegin = await quizPageSelector?.evaluate((el: Element) => {
          return el.querySelector('[xqa="action begin"]') ? true : false
        });
        quizPageType = {...quizPageType, hasBegin};
      } catch (error) {
        console.log('Page locator not found:', error);
      }
      // Check if the quiz has a restart button
      if(!quizPageType.hasBegin) {
        try {
          await Promise.race([
            page.locator('[xqa="progression question-feedback"] [xqa="action begin"]').waitHandle(),
            new Promise((resolve) => setTimeout(resolve, 5000))
          ]);
          const hasRestart = await quizPageSelector?.evaluate((el: Element) => {
            return el.querySelector('[xqa="action restart"]') ? true : false
          });
          quizPageType = {...quizPageType, hasRestart, hasBegin: false};
        } catch (error) {
          console.log('Page locator not found:', error);
        }
      }
      
      if(quizPageType.hasBegin) {
        await page.locator('[xqa="action begin"] + button').click();
        let isBtnDisabled = false;
        const next = '[xqa="action submit"] > *:nth-child(2) >';
        const nextBtn = next + ' button:not([disabled])';
        try {
          await Promise.race([
            page.locator(nextBtn).waitHandle(),
            new Promise((resolve) => setTimeout(resolve, 10000))
          ]);
        } catch (error) {
          console.log('Page locator not found:', error);
        }
        const questionsData:any = [];
        while(isBtnDisabled === false) {
          try {
            questionsData.push(await scrapeQuiz(page));
            await page.locator(nextBtn).click();
          } catch (error) {
            questionsData.push(await scrapeQuiz(page));
            isBtnDisabled = true;
          }
        }
        data = questionsData;
        
        db.serialize(() => {
          questionsData.forEach((question: any) => {
            db.get("SELECT id, COUNT(*) as count FROM tbl_quiz_question WHERE question = ? AND quiz_id = ? AND rationale = ?", question.question, selectedQuiz.id, question.rationale, (err:any, row:any) => {
              if (err) {
                throw new Error(`Failed to check if question exists: ${err.message}`);
              }
              if (row.count === 0) {
                db.run("INSERT INTO tbl_quiz_question (question, rationale, quiz_id) VALUES (?, ?, ?)", question.question, question.rationale, selectedQuiz.id);
                db.get("SELECT last_insert_rowid() as id", (err, row:any) => {
                  if (err) {
                    throw new Error(`Failed to get last inserted row id: ${err.message}`);
                  }
                  if(row.id) {
                    question.answers.forEach((answer: any) => {
                      db.run("INSERT INTO tbl_question_answer (answer, is_correct, question_id) VALUES (?, ?, ?)", answer.text, answer.isCorrect ? 1 : 0, row.id);
                    });
                  }
                });
              } else {
                console.log('Question already exists:', row.id);
              }
            });
          });
        });
      }
      if(quizPageType.hasRestart) {
        await page.locator('[xqa="action restart"]').click();

        
      }
    } else {
      const quizSelector = await page.locator(`${quizzesSeletor}`).waitHandle();
      quiz = await quizSelector?.evaluate(el =>
        Array.from(el.querySelectorAll('article')).map((article: any, articlei) => {
          article.click();
          return {
            title: article.querySelector('._2-BcwAqe + div > span:nth-child(1)')?.innerText,
            description: article.querySelector('[xqa="shortdesc"] p')?.innerText,
          }
        })
      )
  
      const data: { title: string; description: string; }[] = [];
      for (const { title, description } of quiz) {
        data.push({ title, description });
      }
    }

    // Save data to the database
    db.serialize(() => {
      if (gscnData) {
        gscnData.forEach((category: any) => {
          db.get("SELECT COUNT(*) as count FROM tbl_category WHERE title = ?", category.title, (err, row:any) => {
            if (err) {
              throw new Error(`Failed to check if category title exists: ${err.message}`);
            }
            if (row.count === 0) {
              db.run("INSERT INTO tbl_category (title, data) VALUES (?, ?)", category.title, category.data);
            }
          });
        });
      }

      if (quiz) {
        quiz.forEach((quiz: any) => {
          db.get("SELECT COUNT(*) as count FROM tbl_quiz WHERE title = ?", quiz.title, (err, row:any) => {
            if (err) {
              throw new Error(`Failed to check if title exists: ${err.message}`);
            }
            if (row.count === 0) {
              db.run("INSERT INTO tbl_quiz (title, description, category_id) VALUES (?, ?, ?)", quiz.title, quiz.description, props.categoryId || 1);
            }
          });
        });
      }
    });

    if(!isLoggedIn) {
      // Save cookies to the database
      const newCookies = await page.cookies();
      db.serialize(() => {
        db.run("DELETE FROM tbl_cookie");
        newCookies.forEach((cookie: any) => {
          db.run("INSERT INTO tbl_cookie (name, value, domain, path, expires, size, httpOnly, secure, session, sameSite) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
            cookie.name, cookie.value, cookie.domain, cookie.path, cookie.expires, cookie.size, cookie.httpOnly ? 1 : 0, cookie.secure ? 1 : 0, cookie.session ? 1 : 0, cookie.sameSite);
        });
      });
    }

    if(!DEBUG) page.close();

    return { categories: gscnData, data };
  } catch (error:any) {
    throw new Error(`Failed to scrape data: ${error.stack}: ${error.message}`);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const categoryId = Number(req.query.categoryId);
    const scrapedData = await scrapeData({
      categoryId: isNaN(categoryId) ? undefined : categoryId,
      quizId: Number(req.query.quizId),
    });
    res.status(200).json({ message: 'success', data: scrapedData });
  } catch (error:any) {
    res.status(500).json({
      message: 'Error scraping data',
      data: error.message,
    });
  }
}