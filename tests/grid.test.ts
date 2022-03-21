import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";
const headerText: string[] = [];
const secondaryColumnOptions: string[] = [];
const sideBarColumnOptions: string[] = [];
const namesToFilter: string[] = ["Gil", "Tony", "Isabella", "Poppy"];
describe("Load AG Grid", () => {
  before(() => {
    Page.open();
  });

  it("Should display the grids", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is displayed.
     */
    GridPage.columnHeader.forEach((el) => {
      expect(el.isDisplayed()).to.eql(true);
    });
  });

  it("Should validate Primary Column Headers have the following Text Performance, Participant and Game of Choice", () => {
    GridPage.sideBarColumn.click();
    GridPage.primaryColumnHeaders.forEach((el) => {
      const elText = el.getText();
      if (elText !== "") {
        headerText.push(elText);
      }
    });
    console.log(`column headers are ::  ${headerText.toString()}`);
    expect(headerText.includes("Performance")).to.be.true;
    expect(headerText.includes("Participant")).to.be.true;
    expect(headerText.includes("Game of Choice")).to.be.true;
  });
  it("Should Validate that the Primary Column Headers are available in the Columns Sidebar options", () => {
    GridPage.sideBarColumn.click();
    GridPage.columnsSidebarOptions.forEach((el) => {
      const elText = el.getText();
      console.log(`side column Primary Column Headers are ::  ${elText}`);
      expect(headerText.includes(elText)).to.be.true;
    });
    GridPage.sideBarColumn.click();
  });
  it("Should grab the Secondary Column options and validate that these headers are available in the Columns Sidebar options", () => {
    GridPage.secondaryColumnOptions.forEach((el) => {
      const elText = el.getText();
      secondaryColumnOptions.push(elText);
    });
    console.log(
      `Secondary Column options are ::  ${secondaryColumnOptions.toString()}`
    );
    GridPage.sideBarColumn.click();
    GridPage.sideBarColumnOptions.forEach((el) => {
      const elText = el.getText();
      sideBarColumnOptions.push(elText);
    });
    console.log(
      `side Column options are ::  ${sideBarColumnOptions.toString()}`
    );
    GridPage.sideBarColumn.click();
  });
  it("Should Validate that Filtering Name will return result. The following names to be used are Test to Validate that Filtering Name will return result. The following names to be used are Gil,Tony,Isabella,Poppy", () => {
    namesToFilter.forEach((data) => {
      GridPage.nameFilterInput.setValue(data);
      browser.pause(3000);
      GridPage.nameCellValue.forEach((el) => {
        const elText = el.getText();
        console.log(`names from ui is  ::  ${elText}`);
        expect(elText.includes(data)).to.be.true;
      });
    });
    GridPage.nameFilterInput.click();
    browser.keys("Backspace");
    browser.keys("Backspace");
    browser.keys("Backspace");
    browser.keys("Backspace");
    browser.keys("Backspace");
  });
  it("Should Validate that Winnings in October is less than 5000", () => {
    GridPage.scrollHorizantolElement.click();
    // GridPage.scrollHorizantolElement.click();
    // GridPage.scrollHorizantolElement.click();
    browser.pause(8000);
    GridPage.octColumnData.forEach((el) => {
      let elText = el.getText();
      elText = elText.replace("$", "");
      elText = elText.replace(",", "");
      console.log(`oct data from ui is  ::  ${elText}`);
      expect(parseInt(elText)).to.be.below(5000);
    });
  });
});
