import { test, expect } from '@playwright/test';

const routes = [
  { path: '/',                  title: 'Ivan Loyola',    heading: /building AI/i },
  { path: '/work',              title: 'Work',           heading: /problems solved/i },
  { path: '/about',             title: 'About',          heading: /frontend developer/i },
  { path: '/contact',           title: 'Contact',        heading: /let.*s talk/i },
  { path: '/work/fonda-ai',     title: 'Fonda AI',       heading: /fonda ai/i },
  { path: '/work/food-app',     title: 'Recipe',         heading: /recipe/i },
  { path: '/work/ghd',          title: 'GHD',            heading: /ghd/i },
  { path: '/work/ikea',         title: 'IKEA',           heading: /ikea/i },
  { path: '/work/intellect',    title: 'Intellect',      heading: /intellect/i },
];

test.describe('all routes load', () => {
  for (const { path, title, heading } of routes) {
    test(`${path} — renders heading and sets page title`, async ({ page }) => {
      await page.goto(path);
      await expect(page).toHaveTitle(new RegExp(title, 'i'));
      await expect(page.locator('h1').first()).toContainText(heading);
    });
  }
});

test.describe('navigation', () => {
  test('Work link navigates to /work', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /^work$/i }).first().click();
    await expect(page).toHaveURL('/work');
  });

  test('About link navigates to /about', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /^about$/i }).first().click();
    await expect(page).toHaveURL('/about');
  });

  test('case study card on /work links to correct detail page', async ({ page }) => {
    await page.goto('/work');
    await page.getByRole('link', { name: /fonda ai/i }).first().click();
    await expect(page).toHaveURL('/work/fonda-ai');
  });

  test('"← All work" link returns to /work from a case study', async ({ page }) => {
    await page.goto('/work/fonda-ai');
    await page.getByRole('link', { name: /all work/i }).click();
    await expect(page).toHaveURL('/work');
  });
});

test.describe('hamburger menu (mobile)', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('mobile drawer is hidden initially, visible after toggle', async ({ page }) => {
    await page.goto('/');
    const button = page.getByRole('button', { name: /toggle menu/i });
    await expect(button).toBeVisible();
    // Mobile menu drawer not yet in DOM (v-if)
    const mobileDrawer = page.locator('header > div');
    await expect(mobileDrawer).toHaveCount(0);
    await button.click();
    await expect(mobileDrawer).toBeVisible();
  });
});

test.describe('videos on case study pages', () => {
  test('Fonda AI page has two video elements', async ({ page }) => {
    await page.goto('/work/fonda-ai');
    await expect(page.locator('video')).toHaveCount(2);
  });

  test('Food App page has two video elements', async ({ page }) => {
    await page.goto('/work/food-app');
    await expect(page.locator('video')).toHaveCount(2);
  });
});

test.describe('external links', () => {
  test('Fonda AI page links to fondaai.com', async ({ page }) => {
    await page.goto('/work/fonda-ai');
    const link = page.getByRole('link', { name: /fondaai\.com/i });
    await expect(link).toHaveAttribute('href', 'https://fondaai.com');
  });

  test('Food App page links to food.iloyola.com', async ({ page }) => {
    await page.goto('/work/food-app');
    const link = page.getByRole('link', { name: /food\.iloyola\.com/i });
    await expect(link).toHaveAttribute('href', 'https://food.iloyola.com');
  });
});
