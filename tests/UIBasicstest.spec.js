const {test, expect} = require('@playwright/test');

test.only('First Playwright Test', async ({browser}) =>
{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://orange-plant-0ccfa0d00.1.azurestaticapps.net/');
  console.log(await page.title());
  await expect(page).toHaveTitle(/PetWhenua/);


});