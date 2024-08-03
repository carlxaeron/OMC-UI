import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';
const path = require('path');
import db from './../../database';

const COOKIES_PATH = path.resolve(__dirname, 'cookies.txt');
 
type ResponseData = {
  message: string,
  data: any
}

async function scrapeData() {
  try {
    const loginUrl = 'https://apics.partnerrc.com/am/@@login'; // Login URL
    const exploreUrl = 'https://apics.partnerrc.com/cscp2023/explore'; // Replace with the URL to scrape

    const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
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
    
    const gscnSelector = await page.locator('._2w-kjWxO').waitHandle();
    const gscnData = await gscnSelector?.evaluate((el: Element) => {
      return Array.from(el.querySelectorAll('[xqa*=domain]')).map((div: any, i: number) => {
        div.scrollIntoView({ behavior: 'smooth' });
        div.click();
        return { title: div.innerText, id: i };
      });
    });
    
    const articlesPath = '[xqa="accordion"], article'.split(',');
    const articlesTitlePath = `${articlesPath}, ._2-BcwAqe + div > span:nth-child(1)`.split(',');
    const articlesDescPath = `${articlesPath}, ._2-BcwAqe + div [xqa="shortdesc"] p`.split(',');
    const articlesSelector = await page.locator(typeof articlesPath != 'undefined' ? articlesPath[0] : '[xqa="accordion"]').waitHandle();
    const articles = await articlesSelector?.evaluate(el =>
      Array.from(el.querySelectorAll(typeof articlesPath != 'undefined' ? articlesPath[1] : 'article')).map((article: any) => ({
        title: article.querySelector(typeof articlesTitlePath != 'undefined' ? articlesTitlePath[2] : '._2-BcwAqe + div > span:nth-child(1)')?.innerText,
        description: article.querySelector(typeof articlesDescPath != 'undefined' ? articlesDescPath[2] : '[xqa="shortdesc"] p')?.innerText,
        element: article
      }))
    )

    const data = [];
    for (const { title, description, element } of articles) {
      data.push({ title, description });
    }

    // Save data to the database
    db.serialize(() => {
      if (gscnData) {
        gscnData.forEach((category: any) => {
          db.run("INSERT INTO categories (title) VALUES (?)", category.title);
        });
      }

      if (articles) {
        articles.forEach((article: any) => {
          db.run("INSERT INTO articles (title, description) VALUES (?, ?)", article.title, article.description);
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
    const scrapedData = await scrapeData();
    res.status(200).json({ message: 'success', data: scrapedData });
  } catch (error:any) {
    res.status(500).json({
      message: 'Error scraping data',
      data: error.message,
    });
  }
}