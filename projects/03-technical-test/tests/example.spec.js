// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  //We need to retrieve the paragraph and the image from the page
  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');
 
  //We need to get the text content and the image src
  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  console.log({textContent, imageSrc});
  //We need to check that the text content is not empty and that the image src starts with the expected prefix
  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});


