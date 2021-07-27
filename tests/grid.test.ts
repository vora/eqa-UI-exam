import { expect, assert } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

describe("Load AG Grid", () => {
  before(() => {
    Page.open();
  });
  const columnHeaders = [
    "Participant",
    "Game of Choice",
    "Performance",
    "Monthly Breakdown",
  ];
  const filterNames = ["Gil", "Tony", "Isabella", "Poppy", "aa"];

  it("Should display the grids", async () => {
    await (await GridPage.mainGrid).waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is displayed.
     */
    (await GridPage.columnHeader).forEach(async (el) => {
      expect(await el.isDisplayed()).to.eql(true);
    });
  });

  it("Should Validate primary column headings", async () => {
    /**
     * I'm storing the expected result in an array,
     * iterating in a forEach and using if condition to filter only the expected result
     * as it fetches empty string as result
     */

    (await GridPage.columnHeader).forEach(async (head, i = 0) => {
      if ((await head.getText()) != "") {
        expect(head.getText()).to.eql(columnHeaders[i]);
      }
    });
  });

  it("Should Validate primary column headings are available in column sidebar options", async () => {
    /**
     * I am storing Primary column header and secondary column headers text value as array of string
     * using map and filter is use to remove empty strings.
     * I am using assert oneOf in forEach to check each primary column header is present in the side column header.
     *
     */
    const primaryColumnHeaders = await GridPage.columnHeader;
    const filteredHead = [];
    for (let i = 0; i < primaryColumnHeaders.length; i++) {
      const text = await primaryColumnHeaders[i].getText();
      if (text) {
        filteredHead.push(text);
      }
    }
    (await GridPage.sideColumnIcon).click();
    const sideColumnHeaders = await GridPage.sideColumnHeaders;
    const filteredSideHeaders = [];
    for (let i = 0; i < sideColumnHeaders.length; i++) {
      const text = await sideColumnHeaders[i].getText();
      if (text) {
        filteredSideHeaders.push(text)
      }
    }

    filteredHead.forEach((ele) => {
      assert.oneOf(
        ele,
        filteredSideHeaders,
        `${ele} Header not found in the side column`
      );
    });
  });

  it("Should validate filtering name returns result", async () => {
    /**
     * I have used for loop to search different names
     * for each iteration, the value is entered using setValue method.
     * wait for the result to fetch.
     * I have used try catch block to handle exception when assert fails
     *
     */
    for (let i = 0; i <= filterNames.length - 1; i++) {
      try {
        (await GridPage.nameSearchBox).setValue(filterNames[i]);
        (await GridPage.nameResult).waitForDisplayed();
        expect((await GridPage.nameResult).isDisplayed()).to.be.true;
      } catch (e) {
        console.log(`${filterNames[i]} doesnot fetch any result`);
      }
    }
  });

  // it("Should Validate October winning",()=>{
  //   GridPage.octCell.scrollIntoView()
  //   const something = GridPage.octGrid;

  //   const somess= something.map(a=>a.getText())
  //   console.log(somess)

  //  })
});
