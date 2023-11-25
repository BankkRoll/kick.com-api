const puppeteer = require('puppeteer');

const logger = {
  success: (message) => console.log(`\x1b[32m${message}\x1b[0m`),
  info: (message) => console.log(`\x1b[34m${message}\x1b[0m`),
  warn: (message) => console.warn(`\x1b[33mWarning: ${message}\x1b[0m`),
  error: (message) => console.error(`\x1b[31mError: ${message}\x1b[0m`),
};

class KickApiWrapper {
  constructor(options = {}) {
    this.baseURL = 'https://kick.com/api/';
    this.internalBaseURL = 'https://kick.com/api/internal/';
    this.streamBaseURL = 'https://kick.com/stream/featured-livestreams/';
    this.options = options;

    // Accept an external browser instance
    this.browser = options.browser;
  }

  async fetchData(url, fields = null) {
    let browser = null;
    let internalBrowser = false;

    try {
      logger.info(`Fetching data from ${url}...`);
      const browserOptions = this.options.puppeteer || {};

      if (this.browser) {
        // Use the external browser instance if provided
        browser = this.browser;
      } else {
        // Launch a new browser instance if not provided
        browser = await puppeteer.launch({
          headless: 'new',
          ...browserOptions,
        });
        internalBrowser = true;
      }

      const page = await browser.newPage();

      const userAgent =
        this.options.userAgent ||
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3';
      await page.setUserAgent(userAgent);

      const response = await page.goto(url, {
        waitUntil: 'networkidle2',
        ...this.options.gotoOptions,
      });

      if (response && response.ok()) {
        logger.success(`Successfully loaded URL: ${url}`);
        const data = await page.evaluate(() => document.body.textContent);
        const jsonData = JSON.parse(data);

        if (fields) {
          return Array.isArray(fields)
            ? fields.reduce(
                (obj, field) => ({ ...obj, [field]: jsonData[field] }),
                {}
              )
            : jsonData[fields];
        }
        return jsonData;
      } else {
        throw new Error(
          `Failed to load URL: ${response?.status()} - ${response?.statusText()}`
        );
      }
    } catch (error) {
      logger.error(`Error fetching data: ${error}`);
      throw error;
    } finally {
      if (browser && internalBrowser) {
        logger.info('Closing browser...');
        await browser.close();
        logger.success('Browser closed.');
      }
    }
  }

  async fetchChannelData(username, version = 'v2', fields = null) {
    const url = `${this.baseURL}${version}/channels/${username}`;
    return this.fetchData(url, fields);
  }

  async fetchLeaderboards(username, fields = null) {
    const url = `${this.baseURL}v2/channels/${username}/leaderboards`;
    return this.fetchData(url, fields);
  }

  async fetchLiveStreamDetails(username, fields = null) {
    const url = `${this.baseURL}v2/channels/${username}/livestream`;
    return this.fetchData(url, fields);
  }

  async fetchChatroomSettings(username, fields = null) {
    const url = `${this.internalBaseURL}v1/channels/${username}/chatroom/settings`;
    return this.fetchData(url, fields);
  }

  async fetchCategories(fields = null) {
    const url = `${this.baseURL}v1/categories`;
    return this.fetchData(url, fields);
  }

  async fetchSubcategories(fields = null) {
    const url = `${this.baseURL}v1/subcategories`;
    return this.fetchData(url, fields);
  }

  async fetchTopCategories(fields = null) {
    const url = `${this.baseURL}v1/categories/top`;
    return this.fetchData(url, fields);
  }

  async fetchFeaturedLivestreams(region = 'en', fields = null) {
    const url = `${this.streamBaseURL}${region}`;
    return this.fetchData(url, fields);
  }
}

module.exports = { KickApiWrapper };
