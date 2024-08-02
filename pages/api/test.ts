import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
 
type ResponseData = {
  message: string,
  data: any
}
 
// Function to scrape data
async function scrapeData() {
  try {
    const response = await axios.get('https://apics.partnerrc.com/am/@@login'); // Replace with the URL you want to scrape
    // Process the response and extract the data you need
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error('Failed to scrape data');
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const scrapedData = await scrapeData();
    res.status(200).json({ message: 'Hello from Next.js!', data: scrapedData });
  } catch (error) {
    res.status(500).json({
      message: 'Error scraping data',
      data: undefined
    });
  }
}