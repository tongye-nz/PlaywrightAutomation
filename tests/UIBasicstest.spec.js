const {test, expect} = require('@playwright/test');

test.only('First Playwright Test', async ({browser}) =>
{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://orange-plant-0ccfa0d00.1.azurestaticapps.net/login');
  console.log(await page.title());
  await expect(page).toHaveTitle(/PetWhenua/);
  //CSS, Xpath
  await page.locator('')
  await page.locator('#«r4»').type('admin');
  await page.locator('#«r5»').type('admin@pas'); //wrong admin pass

  await page.locator('main').getByRole('button', { name: 'Sign In' }).click(); //MUI React 'Sign in' button
  // if CSS: await page.locator('#buttonId').click();

  // web driver wait
  const errorMsg = await page.getByRole('alert').textContent(); //MUI React 'alert' error message
  console.log('Error:', errorMsg.trim());
  // if CSS: console.log(await page.locator("[style='block']").textContent());


});