import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  expect(page.getByRole('cell', { name: 'Customer 10' })).toBeVisible()
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Próxima página' }).click()

  expect(page.getByRole('cell', { name: 'Customer 11' })).toBeVisible()

  expect(page.getByRole('cell', { name: 'Customer 20' })).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()

  expect(page.getByRole('cell', { name: 'Customer 51' })).toBeVisible()

  expect(page.getByRole('cell', { name: 'Customer 60' })).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()

  expect(page.getByRole('cell', { name: 'Customer 41' })).toBeVisible()

  expect(page.getByRole('cell', { name: 'Customer 50' })).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  expect(page.getByRole('cell', { name: 'Customer 10' })).toBeVisible()
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('ID do pedido').fill('order-11')
  await page.getByRole('button', { name: 'Filtrar Resultados' }).click()

  expect(page.getByRole('cell', { name: 'order-11' })).toBeVisible()
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Nome do cliente').fill('Customer 14')
  await page.getByRole('button', { name: 'Filtrar Resultados' }).click()

  await expect(page.getByRole('cell', { name: 'Customer 14' })).toBeVisible()
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()

  await page.getByLabel('Pendente').click()
  await page.getByRole('button', { name: 'Filtrar Resultados' }).click()

  const tableRows = page.getByRole('cell', { name: 'Pendente' })
  await expect(tableRows).toHaveCount(10)
})
