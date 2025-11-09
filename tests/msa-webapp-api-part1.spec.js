const {test, expect, request} = require('@playwright/test');
const loginPayload = {usernameOrEmail: "vet01", password: "TestPass123!"};
let token;
test.beforeAll( async ()=>
{
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://petwhenua-gpggdjawh0duc2du.australiaeast-01.azurewebsites.net/api/auth/login",
        {
            data:loginPayload
        }) // 200, 201
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token);

});

test('Playwright getBy with MSA login page', async ({ page }) => {

    page.addInitScript(value => {
        window.localStorage.setItem("token", value);
    }, token)

    await page.goto("https://orange-plant-0ccfa0d00.1.azurestaticapps.net/profile");
    // await page.goto("https://orange-plant-0ccfa0d00.1.azurestaticapps.net/login");
    // await expect(page.getByText("Sign in to PetWhenua")).toBeVisible();
    // await page.getByPlaceholder("Email or Username").fill("vet01");
    // await page.getByPlaceholder('Enter your password').fill('TestPass123!');
    // await page.locator('main').getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByText("My Profile")).toBeVisible();
});