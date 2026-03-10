import {test, expect} from '@playwright/test'

test('login flow', async ({page})=>{
  await page.goto('/login')

  await page.fill('input[type="email"]', 'testuser1@gmail.com')
  await page.fill('input[type="password"]', 'testuser1')

  await page.click('button[type="submit"]')

  await page.waitForURL(/home/, {timeout: 10000})
  await expect(page).toHaveURL(/home/)
}) 