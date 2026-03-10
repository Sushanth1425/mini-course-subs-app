import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, 
  expect: {timeout: 10000},
  webServer: {
    command: 'VITE_API_URL=http://localhost:5050/api npm run dev', 
    url: 'http://localhost:5173',
    timeout: 180 * 1000, 
    reuseExistingServer: !process.env.CI, 
  },
  use: {
    baseURL: 'http://localhost:5173',
  },
});