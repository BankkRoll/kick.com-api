const puppeteer = require('puppeteer');

const logger = {
  success: (message) => console.log(`\x1b[32m${message}\x1b[0m`),
  info: (message) => console.log(`\x1b[34m${message}\x1b[0m`),
  warn: (message) => console.warn(`\x1b[33mWarning: ${message}\x1b[0m`),
  error: (message) => console.error(`\x1b[31mError: ${message}\x1b[0m`),
};

class KickApiWrapper {
  constructor(version = 'v2') {
    this.baseURL = `https://kick.com/api/${version}/channels/`;
  }

  async fetchChannelData(username, fields = null) {
    let browser = null;

    try {
      logger.info('Launching browser...');
      browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      logger.info('Browser launched successfully.');

      await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
      );

      const fullURL = `${this.baseURL}${username}`;
      logger.info(`Navigating to ${fullURL}`);
      const response = await page.goto(fullURL, { waitUntil: 'networkidle2' });

      if (response && response.ok()) {
        logger.success(`Successfully loaded URL: ${fullURL}`);
        const data = await page.evaluate(() => document.body.textContent);
        const jsonData = JSON.parse(data);

        if (fields) {
          if (Array.isArray(fields)) {
            return fields.reduce((obj, field) => {
              obj[field] = jsonData[field];
              return obj;
            }, {});
          } else {
            return jsonData[fields];
          }
        }

        return jsonData;
      } else {
        logger.error(
          `Failed to load URL: ${response?.status()} - ${response?.statusText()}`
        );
        throw new Error(
          `Failed to load URL: ${response?.status()} - ${response?.statusText()}`
        );
      }
    } catch (error) {
      logger.error(`Error fetching URL with Puppeteer: ${error}`);
      throw error;
    } finally {
      if (browser) {
        logger.info('Closing browser...');
        await browser.close();
        logger.success('Browser closed.');
      }
    }
  }
}

module.exports = { KickApiWrapper };
