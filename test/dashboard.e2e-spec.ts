import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('20', { exact: true }).first()).toBeVisible()
  await expect(page.getByText('-5% em relação a ontem').first()).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('10').first()).toBeVisible()
  await expect(
    page.getByText('+4% em relação ao mês passado').first(),
  ).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(
    page.getByText('20', { exact: true }).nth(1).first(),
  ).toBeVisible()
  await expect(page.getByText('+8% em relação ao mês passado')).toBeVisible()
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 220,00')).toBeVisible()
  await expect(page.getByText('+14% em relação ao mês passado')).toBeVisible()
})
