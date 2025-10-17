const {test, expect} = require('@playwright/test');

test('First Playwright Test', async ({browser}) =>
  // test.only = only run this test script
{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://orange-plant-0ccfa0d00.1.azurestaticapps.net/login');
  console.log(await page.title());
  await expect(page).toHaveTitle(/PetWhenua/);

  //CSS, Xpath
  const userName = page.locator('#«r4»');
  const password = page.locator('#«r5»');
  const signIn = page.locator('main').getByRole('button', { name: 'Sign In' }); //MUI React 'Sign in' button

  await page.locator('')
  await userName.type('admi');
  await password.type('admin@pass'); 
  await signIn.click(); 
  // if CSS: await page.locator('#buttonId').click();

  // web driver wait
  const errorMsg = await page.getByRole('alert').textContent(); //MUI React 'alert' error message
  console.log('Error:', errorMsg.trim());
  // if CSS: console.log(await page.locator("[style='block']").textContent());

  //type fill
  await userName.fill('');
  await userName.fill('admin');
  await signIn.click();


});

test.only('UI Controls', async ({page})=>
{
  await page.goto("https://rahulshettyacademy.com/loginpagePractice");
  const userName = page.locator('#username');
  const signIn = page.locator('signInBtn');
  const dropdown = page.locator('select.form-control');
  await dropdown.selectOption('Consult');
  await page.pause;
  
});