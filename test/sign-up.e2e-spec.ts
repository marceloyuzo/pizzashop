import { expect, test } from '@playwright/test'

test('sign up successfuly', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')

  await page.getByLabel('Seu nome').fill('Fulano')

  await page.getByLabel('Seu e-mail').fill('fulano@example.com')

  await page.getByLabel('Seu celular').fill('12341234')

  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText('Restaurante cadastro com sucesso!.')

  await expect(toast).toBeVisible()

  // await page.waitForTimeout(2000)
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Error Shop')

  await page.getByLabel('Seu nome').fill('Error')

  await page.getByLabel('Seu e-mail').fill('error@example.com')

  await page.getByLabel('Seu celular').fill('12341234')

  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText('Credenciais inválidas.')

  await expect(toast).toBeVisible()

  // await page.waitForTimeout(2000)
})

test('navigate to sign in page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
