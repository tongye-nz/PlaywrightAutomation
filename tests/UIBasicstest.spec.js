const {test} = require('@playwright/test');

test('First Playwright Test', async ({browser}) =>
{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://orange-plant-0ccfa0d00.1.azurestaticapps.net/');

});