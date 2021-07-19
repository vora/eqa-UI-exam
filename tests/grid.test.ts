import { assert, expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

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

  it("Should Create a Test to Validate Primary Column Headers", () => {
    const expPrimaryLabels = ['Participant', 'Game of Choice', 'Performance', 'Monthly Breakdown'];
    expect(GridPage.primaryColumnHeaderLables).to.deep.equal(expPrimaryLabels)
  })

  it("Should Create a Test to Validate that the Primary Column Headers are available in the Columns Sidebar options", () => {
    const expPrimaryLabels = ['Participant', 'Game of Choice', 'Performance', 'Monthly Breakdown'];
    expect(GridPage.sidebarColumnLabels).to.include.members(expPrimaryLabels);
  })

  it("Should Create a Test to Validate that Filtering Name will return result. The following names to be used are", () => {
    console.log('Karthik Result' +GridPage.filterSecHeaderResult('Name', ['Gil']));
    const filterResult = ['Gil Lopes','Gil Jagger','Gil Dalton','Gil Beckham'];
    // expect(GridPage.filterSecHeaderResult('Name', ['Gil'])).to.deep.equal(filterResult)
    GridPage.filterSecHeaderResult('Name', ['Gil', 'Tony', 'Isabella', 'Poppy']);

  })

  it("Should Create a test to grab the Secondary Column options and validate that these headers are available in the Columns Sidebar options", () => {
    expect(GridPage.sidebarColumnLabels).to.include.members(GridPage.secColumnHeaderLabels)
  })
  
  xit("Should Create a Test to Validate that Winnings in October is less than 5000", () => {
    console.log('KART' + GridPage.colValues('oct'));
    expect(GridPage.sidebarColumnLabels).to.include.members(GridPage.secColumnHeaderLabels)
  })
});
