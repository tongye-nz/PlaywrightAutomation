const {test, expect, request} = require('@playwright/test');
const loginPayload = {usernameOrEmail: "vet01", password: "TestPass123!"};

test.beforeAll( async ()=>
{
    const apiContext = await request.newContext();
    const loginResponse = apiContext.post("https://petwhenua-gpggdjawh0duc2du.australiaeast-01.azurewebsites.net/api/auth/login",
        {
            data:loginPayload
        }) // 200, 201
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginPayload.json();
    const token = loginResponseJson.token;
    console.log(token);

});