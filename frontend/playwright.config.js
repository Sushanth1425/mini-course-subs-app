import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, 
  expect: {timeout: 10000},
  webServer: {
    command: 'npm run dev', 
    url: 'http://localhost:5173',
    timeout: 180 * 1000, 
    reuseExistingServer: !process.env.CI, 
  },
  use: {
    baseURL: process.env.VITE_API_URL,
  },
});