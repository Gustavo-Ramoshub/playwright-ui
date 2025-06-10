// @ts-check
import { test as setup } from "@playwright/test"

const TOKEN_FILEPATH = "playwright/.auth/user.json"

setup('authenticate', async ({ page }) => {
    await page.goto('https://my.api.org/')
    await page.getByLabel('Email').fill('terah74957@adrewire.com')
    await page.getByLabel('Password').fill('Gusta@123')
    await page.getByRole('button', { name: 'Continue' }).click()
    await page.waitForTimeout(5000)
    await page.context().storageState({ path: TOKEN_FILEPATH })
})