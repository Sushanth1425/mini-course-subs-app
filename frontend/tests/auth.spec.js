import {test, expect} from '@playwright/test'

test('login flow', async ({page})=>{
  await page.goto('http://localhost:5173/login')

  await page.fill('input[type="email"]', 'testuser1@gmail.com')
  await page.fill('input[type="password"]', 'testuser1')

  await page.click('button[type="submit"]')

  await expect(page).toHaveURL(/home/)
})  