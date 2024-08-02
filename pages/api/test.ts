import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import puppeteer from 'puppeteer';
const fs = require('fs').promises;
const path = require('path');

const COOKIES_PATH = path.resolve(__dirname, 'cookies.json');
 
type ResponseData = {
  message: string,
  data: any
}
 
// // Function to scrape data
// async function scrapeData() {
//   try {
//     const response = await axios.get('https://apics.partnerrc.com/am/@@login'); // Replace with the URL you want to scrape
//     // Process the response and extract the data you need
//     const data = response.data;
//     return data;
//   } catch (error) {
//     throw new Error('Failed to scrape data');
//   }
// }
// Function to scrape data
async function scrapeData() {
  try {
    const loginUrl = 'https://apics.partnerrc.com/am/@@login'; // Login URL
    const exploreUrl = 'https://apics.partnerrc.com/cscp2023/explore'; // Replace with the URL to scrape

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setJavaScriptEnabled(true);
    await page.setViewport({width: 1080, height: 1024});
    await fs.writeFile(COOKIES_PATH, JSON.stringify([]));

    // Load cookies if they exist
    const cookiesExist = await fs.access(COOKIES_PATH).then(() => true).catch(() => false);
    if (cookiesExist) {
      const cookies = JSON.parse(await fs.readFile(COOKIES_PATH, 'utf8'));
      await page.setCookie(...cookies);
    }

    // Check if cookies are already set
    const cookies = await page.cookies();
    const isLoggedIn = cookies.some(cookie => cookie.name === '__ac'); // Replace 'your_cookie_name' with the actual cookie name

    if (!isLoggedIn) {
      await page.goto(loginUrl);
      await page.type('input[name="login"]', 'chanokpim.ch'); // Replace with the correct selector and your username
      await page.type('input[name="password"]', 'Password2524'); // Replace with the correct selector and your password

      await page.click('[type="submit"]'); // Replace with the correct selector for the login button

      await page.locator('text/Choose Product').waitHandle();
      await page.evaluate(() => {
        document.querySelector('.product-apicscscp_v2023')?.scrollIntoView();
      });

      // Save cookies after login
      const newCookies = await page.cookies();
      await fs.writeFile(COOKIES_PATH, JSON.stringify(newCookies, null, 2));

      await page.locator('.btn-begin').click(); 
    } else {
      await page.goto(exploreUrl);
    }
    
    const gscnSelector = await page.locator('._2w-kjWxO').waitHandle();
    const gscnData = await gscnSelector?.evaluate(el => Array.from(el.querySelectorAll('[xqa*=domain]')).map((div:any) => div.innerText));
    
    const data:any = [];
    gscnData.forEach(async (gscn:any, gscni) => {
      const articlesSelector = await page.locator('[xqa="accordion"]').waitHandle();
      const articles = await articlesSelector?.evaluate(el => Array.from(el.querySelectorAll('article')).map((article:any) => {
        return {
          title: article.querySelector('._2-BcwAqe + div > span')?.innerText,
        };
      }));
      await data.push({ articles });
    });

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