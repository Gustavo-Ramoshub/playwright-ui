// @ts-check
import { test, expect } from '@playwright/test';

// Teste para casos de tamanhos especificos
// test.use({
//   viewport: { width: 1600, height: 1200}
// })

// Teste para geolocalização
// test.use({
//   geolocation: { longitude: 41.890221, latitude: 12.4923448 },
//   permissions: ['geolocation']
// })



test('Login com sucesso @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('Teste@gmail.com')
  await page.screenshot({ path: 'screenshot/screenshot.png' })
  await page.locator('#password').click()
  await page.locator('#password').fill('12345678')
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
  await page.screenshot({ path: 'screenshot/screenshot1.png' })
  await page.getByRole('button', { name: 'login' }).click()
})

test('Login com sucesso 1 @login', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('Teste@gmail.com')
  await page.screenshot({ path: 'screenshot/screenshot.png' })
  await page.locator('#password').click()
  await page.locator('#password').fill('12345678')
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
  await page.screenshot({ path: 'screenshot/screenshot1.png' })
  await page.getByRole('button', { name: 'login' }).click()
})

test('Login com sucesso 2', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('Teste@gmail.com')
  await page.screenshot({ path: 'screenshot/screenshot.png' })
  await page.locator('#password').click()
  await page.locator('#password').fill('12345678')
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
  await page.screenshot({ path: 'screenshot/screenshot1.png' })
  await page.getByRole('button', { name: 'login' }).click()
})