import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";
const fs = require("fs");
const openJSON = fs.readFileSync(__dirname + "/../../cannedData.json");
const TestData = JSON.parse(openJSON);
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

  it("Should display primary column headers", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is text is matching the list of columns mentioned in canneddata.json
     */
    let i = 0;
    GridPage.columnHeader.forEach((el) => {
      if (!(el.getText() == "")) {
        expect(el.getText()).to.eql(TestData.columnheaders[i].name);
        i++;
      }
    });
  });

  it("Should verify Primary Column Headers are available in the Columns Sidebar options", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using for loop here to loop through all the column headers mentioned in canneddata.json
     * The function iterates through the json values
     * and checks if element is displayed in side bar.
     */
    for (let i = 0; i < TestData.columnheaders.length; i++) {
      GridPage.sideBarSearch.setValue(TestData.columnheaders[i].name);
      browser.pause(1000);
      expect(
        GridPage.sideBar
          .$('//span[text()="' + TestData.columnheaders[i].name + '"]')
          .isDisplayed()
      ).to.eql(
        true,
        TestData.columnheaders[i].name + " is not displayed in side bar"
      );
    }
  });

  it("Should validate that secondary headers are available in the Columns Sidebar options", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * gets text from the element, gives input to the search textbox in side bar
     * and verifies the secondary header present in side bar.
     */
    GridPage.columnSecondaryHeader.forEach((el) => {
      const subheadername = el.getText();
      if (!(subheadername == "")) {
        GridPage.sideBarSearch.setValue(subheadername);
        browser.pause(1000);
        expect(
          GridPage.sideBar
            .$('//span[text()="' + subheadername + '"]')
            .isDisplayed()
        ).to.eql(
          true,
          "-" + subheadername + "- sub header is not displayed in side bar"
        );
      }
    });
  });

  it("Validate that Filtering Name will return result", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forloop to get all the name search options from canned data.json file
     * The function iterates through each value in json file
     * enters the value in name search box
     * and verify all the search results include the search value.
     */
    for (let i = 0; i < TestData.namesearchoptions.length; i++) {
      GridPage.nameFilterSearch.setValue(TestData.namesearchoptions[i].option);
      browser.pause(1000);
      GridPage.nameFilterSearchResults.forEach((el) => {
        expect(el.getText()).to.include(TestData.namesearchoptions[i].option);
      });
    }
  });

  it("Should Validate that Winnings in October is less than 5000", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * The first piece of code is to navigate till Oct column
     * Then it clicks on filter option, selects less than
     * enter 5000 in the search box 
     * get text from all the search results, trims them
     * and verify that search results are less than 5000
     */
    // browser.touchScroll(250, 0);
    GridPage.nameFilterSearch.click();
    for (let i = 0; i < 19; i++) {
      browser.keys(["Tab"]);
    }
    GridPage.octFilterSearchButton.click();
    GridPage.displayFieldPicker.click();
    browser.pause(1000);
    $('//span[text()="Less than"]').click();
    GridPage.octFilterSearch.setValue("5000");
    browser.pause(1000);
    GridPage.octFilterSearchResults.forEach((el) => {
      expect(
        parseInt(el.getText().replace(",", "").replace("$", "")) < 5000
      ).to.equal(true, el.getText() + " value is not less than 5000");
    });
  });
});
