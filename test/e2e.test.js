const puppeteer = require('puppeteer');

test('should display an outpout with correct text', async () => {
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 80,
      args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto(
      'http://127.0.0.1:5500/index.html'
    );
    await page.click('#number');
    await page.type('#number', '125');
    await page.click('#button');
    const outpout = await page.$eval('#output', el => el.innerHTML);
    expect(outpout).toBe(' one hundred twenty five , ');
  }, 10000);


  test('should display an outpout with correct text', async () => {
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 80,
      args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto(
      'http://127.0.0.1:5500/index.html'
    );
    await page.click('#number');
    await page.type('#number', '14598');
    await page.click('#button');
    const outpout = await page.$eval('#output', el => el.innerHTML);
    expect(outpout).toEqual(' fourteen thousand ,  five hundred ninety eight , ');
  }, 10000);