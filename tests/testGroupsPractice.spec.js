import { test } from "@playwright/test";

test.describe("Test Group", () => {
    //create beforeEach function
    test.beforeEach(async ({ page }) => {
      await page.goto("https://practice.cydeo.com/");
      
    });
    //create afterEach function
    test.afterEach(async ({ page }) => {
      await page.waitForTimeout(3000);
    });
  test("Test A", async ({ page }) => {
    // Empty test body
    console.log("Test A is executed");
  
  });

  test("Test B", async ({ page }) => {
    // Empty test body
    console.log("Test B is executed");
  });

  test("Test C", async ({ page }) => {
    // Empty test body
    console.log("Test C is executed");
  });
});
