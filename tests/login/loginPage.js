const { expect } = require('@playwright/test');

const selectors = {
    fields: {
        user: '#user',
        password: '#password'
    }
};

const abrirSite = async (page) => {
    await page.goto('https://automationpratice.com.br/login');
};

const logarComSucesso = async (page) => {
    await page.locator(selectors.fields.user).fill('testegustavo@gmail.com');
    await page.locator(selectors.fields.password).fill('com123w');
    await page.getByRole('button', { name: 'login' }).click();
};

const verificarSeLogado = async (page) => {
    await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
};

const logarComEmailVazio = async (page) => {
    await page.locator(selectors.fields.password).fill('12345678');
    await page.getByRole('button', { name: 'login' }).click();
};

const validarEmailInvalido = async (page) => {
    await expect(page.getByText('E-mail inválido.')).toBeVisible({ timeout: 10000 });
};

const logarComSenhaVazia = async (page) => {
    await page.locator(selectors.fields.user).fill('testegustavo@gmail.com');
    await page.getByRole('button', { name: 'login' }).click();
};

const validarSenhaInvalida = async (page) => {
    await expect(page.getByText('Senha inválida.')).toBeVisible({ timeout: 10000 });
};

module.exports = {
    abrirSite,
    logarComSucesso,
    verificarSeLogado,
    logarComEmailVazio,
    validarEmailInvalido,
    logarComSenhaVazia,
    validarSenhaInvalida
};