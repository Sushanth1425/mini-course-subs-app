import {test, expect} from '@playwright/test'

test('login flow', async ({page})=>{
  const email = `${Date.now()}@gmail.com`

  await page.goto('/signup')
  await page.fill('input[name="name"]', 'tset user')
  await page.fill('input[type="email"]', email)
  await page.fill('input[type="password"]', 'sush1234')
  await page.waitForResponse(res=> res.url().includes('/signup') && res.status()=== 201)

  await page.goto('/login')
  await page.fill('input[type="email"]', email)
  await page.fill('input[type="password"]', 'sush1234')
  await page.click('button[type="submit"]')

  await page.waitForURL(/home/, {timeout: 15000})
  await expect(page).toHaveURL('/')
}) 