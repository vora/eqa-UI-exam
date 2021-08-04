import * as dotenv from "dotenv";
dotenv.config();

export class Page {
  public static open() {
    browser.pause(5000);
    
    browser.url("https://www.ag-grid.com/example.php");
    
    //console.log(process.env.URL);
   // browser.url(process.env.URL);
  }

  public static waitForElementTobeVisible(
    elementToVisible: WebdriverIO.Element
  ) {
    elementToVisible.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Element not Displayed",
    });
  }
}
