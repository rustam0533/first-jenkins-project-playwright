//const{test} = require("@playwright/test")
import {test} from "@playwright/test"

test("google search test @google", async ({page}) => {

  await page.goto("https://www.google.com/");
  let searchInputBox = page.locator("//textarea[@class='gLFyf']");
  await page.waitForTimeout(3000);
 // await searchInputBox.type("Test Playwright");
  
  await searchInputBox.fill("Test Playwright");
   await page.waitForTimeout(3000);

   await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
 });

 /*

 <textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Suche" value="" jsaction="paste:puy29d;" aria-label="Suche" placeholder="" aria-autocomplete="both" aria-expanded="true" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" data-ved="0ahUKEwjI3fCRnv2JAxXjulYBHZcJDEYQ39UDCAY" aria-activedescendant="" style=""></textarea>
 */

 //textarea[@class='gLFyf']

 test("youtube search test @youtube", async ({page}) => {
    await page.goto("https://www.youtube.com/");
  });