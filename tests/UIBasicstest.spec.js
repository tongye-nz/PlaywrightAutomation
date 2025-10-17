const {test, expect} = require('@playwright/test');

test('First Playwright Test', async ({browser}) =>
  // test.only = only run this test script
{
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator('#username');
  const signIn = page.locator('signInBtn');
  const cardTitles = page.locator('.card-body a');
  await page.goto('https://rahulshettyacademy.com/loginpagePractise');
  console.log(await page.title());

  //CSS
  await userName.type('rahulshetty');
  await page.locator("[type='password']").type('learning');
  await signIn.click(); 

  // web driver wait
  console.log(await page.locator("[style='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');

  //type fill
  await userName.fill('');
  await userName.fill('admin');
  await signIn.click();


});

test('UI Controls', async ({page})=>
{
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  const userName = page.locator('#username');
  const signIn = page.locator('signInBtn');
  const dropdown = page.locator('select.form-control');
  await dropdown.selectOption('consult');
  await page.locator('.radiotextsty').last().click();
  await page.locator('#okayBtn').click();
  await page.pause();
  
});

test.only('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
 
 });