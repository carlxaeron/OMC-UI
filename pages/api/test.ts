import type { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer';
import db from './../../database';
 
type ResponseData = {
  message: string,
  data: any
}

async function scrapeData(props:{ 
  categoryId: number | number[] | undefined,
  quizId: number | number[] | undefined,
}) {
  try {
    const loginUrl = 'https://apics.partnerrc.com/am/@@login'; // Login URL
    const exploreUrl = 'https://apics.partnerrc.com/cscp2023/explore'; // Replace with the URL to scrape

    // const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setJavaScriptEnabled(true);
    await page.setViewport({width: 1080, height: 1024});

    // Retrieve cookies from the database
    const cookies = await new Promise<any[]>((resolve, reject) => {
      db.all("SELECT * FROM cookies", (err, rows) => {
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
    
    const quizSelector = await page.locator('[xqa="accordion"]').waitHandle();
    const quiz = await quizSelector?.evaluate(el =>
      Array.from(el.querySelectorAll('article')).map((article: any) => ({
        title: article.querySelector('._2-BcwAqe + div > span:nth-child(1)')?.innerText,
        description: article.querySelector('[xqa="shortdesc"] p')?.innerText,
      }))
    )

    const data: { title: string; description: string; }[] = [];
    for (const { title, description } of quiz) {
      data.push({ title, description });
    }

    // Save data to the database
    db.serialize(() => {
      if (gscnData) {
        gscnData.forEach((category: any) => {
          db.get("SELECT COUNT(*) as count FROM categories WHERE title = ?", category.title, (err, row:any) => {
            if (err) {
              throw new Error(`Failed to check if category title exists: ${err.message}`);
            }
            if (row.count === 0) {
              db.run("INSERT INTO categories (title, data) VALUES (?, ?)", category.title, category.data);
            }
          });
        });
      }

      if (quiz) {
        quiz.forEach((quiz: any) => {
          db.get("SELECT COUNT(*) as count FROM quiz WHERE title = ?", quiz.title, (err, row:any) => {
            if (err) {
              throw new Error(`Failed to check if title exists: ${err.message}`);
            }
            if (row.count === 0) {
              db.run("INSERT INTO quiz (title, description, category_id) VALUES (?, ?, ?)", quiz.title, quiz.description, props.categoryId || 1);
            }
          });
        });
      }
    });

    if(!isLoggedIn) {
      // Save cookies to the database
      const newCookies = await page.cookies();
      db.serialize(() => {
        db.run("DELETE FROM cookies");
        newCookies.forEach((cookie: any) => {
          db.run("INSERT INTO cookies (name, value, domain, path, expires, size, httpOnly, secure, session, sameSite) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
            cookie.name, cookie.value, cookie.domain, cookie.path, cookie.expires, cookie.size, cookie.httpOnly ? 1 : 0, cookie.secure ? 1 : 0, cookie.session ? 1 : 0, cookie.sameSite);
        });
      });
    }

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