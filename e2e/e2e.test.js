import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(5000); // default puppeteer timeout

describe('Card checker', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppetteer.launch({
      //headless: false, // show gui
      //slowMo: 100,
      //devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should add .valid class for valid card', async () => {
    await page.goto(baseUrl);
    const input = await page.$('.input');
    const button = await page.$('button');
    await input.type('4539051434093972');
    await button.click();
    await page.waitForSelector('.active');
  });
});
