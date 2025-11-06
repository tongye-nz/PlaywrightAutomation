import { test, expect } from '@playwright/test';

test('Playwright Special locators', async ({ page }) => {

    await page.goto("https://orange-plant-0ccfa0d00.1.azurestaticapps.net/register");
    await expect(page.getByText("Create Your Account")).toBeVisible();

    await page.getByPlaceholder("First Name").fill("playwright");
    await page.getByPlaceholder("Last Name").fill("testone");
    await page.getByPlaceholder("Username").fill("playwright_test01");
    await page.getByPlaceholder("Email").fill("playwright_test01@test.com");
    await page.getByPlaceholder('Enter your password').fill('TestPass@123!');
    await page.getByPlaceholder('Confirm your password').fill('TestPass@123!');
    await page.getByRole("button",{name : "Create Account"}).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText("My Profile")).toBeVisible();
});