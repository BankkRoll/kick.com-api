// __tests__/KickApiWrapper.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const { KickApiWrapper } = require('../src/index');
const path = require('path');

// Define the output directory and files
const OUTPUT_DIR = './__tests__';
const LOGS_FILE = path.join(OUTPUT_DIR, 'logs.txt');
const RESULTS_FILE = path.join(OUTPUT_DIR, 'test-results.json');

// Ensure the output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

// Function to remove ANSI escape codes
const stripAnsi = (str) => {
  return str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
};

// Symbols for logs
const symbols = {
  pass: '✔️',
  fail: '❌'
};

const timestamp = () => new Date().toISOString();

const originalConsoleLog = console.log;
const logStream = fs.createWriteStream(LOGS_FILE, { flags: 'a' });
console.log = (...args) => {
  const message = args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg)).join(' ');
  const cleanMessage = stripAnsi(message);
  const messageWithTimestamp = `[${timestamp()}] ${cleanMessage}`;
  originalConsoleLog(messageWithTimestamp);
  logStream.write(`${messageWithTimestamp}\n`);
};

const logTestResult = (result, testName) => {
  const symbol = result ? symbols.pass : symbols.fail;
  const status = result ? 'PASSED' : 'FAILED';
  console.log(`${symbol} Test '${testName}' ${status}`);
};

describe('KickApiWrapper with real browser', () => {
  let browser;
  let kickApi;
  let testResults = {};

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    console.log('Started test suite.');
  });

  afterAll(async () => {
    await browser.close();
    console.log('Finished test suite.');
    logStream.end();
    fs.writeFileSync(RESULTS_FILE, JSON.stringify(testResults, null, 2));
  });

  beforeEach(() => {
    kickApi = new KickApiWrapper();
    console.log('Initialized KickApiWrapper.');
  });

  test('fetchChannelData should retrieve all channel data for a valid username', async () => {
    const username = 'ac7ionman';
    const data = await kickApi.fetchChannelData(username);
    const result = data !== undefined;
    logTestResult(result, 'fetchChannelData with valid username');
    expect(data).toBeDefined();
    testResults[username] = data;
  });

  test('fetchChannelData should handle invalid username', async () => {
    const username = 'invalidUsername';
    const data = await kickApi.fetchChannelData(username);
    const result = data !== undefined;
    logTestResult(result, 'fetchChannelData with invalid username');
    expect(data).toBeDefined();
    testResults[username] = data;
  });
});
