import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

describe("Load AG Grid", () => {
  before(() => {
    Page.open();
  });

  it("Should display the grids primary columns under side bars", () => {
    GridPage.mainGrid.waitForDisplayed();
    const columnnameParticipant = $("//span[text()='Participant'][1]");
    const columnnameGameofChoice = $("//span[text()='Game of Choice'][1]");
    const columnnamePerformance = $("//span[text()='Performance'][1]");
    const columnnameMonthlyBreakdown = $("//span[text()='Monthly Breakdown'][1]");
    expect(columnnameParticipant.isDisplayed());
    expect(columnnameGameofChoice.isDisplayed());   
    expect(columnnamePerformance.isDisplayed());   
    expect(columnnameMonthlyBreakdown.isDisplayed());   
  });

  it("Should display filter name with Gil", () => {
    GridPage.mainGrid.waitForDisplayed();
    const columnBtn = $("//button[@ref='eToggleButton']");
    columnBtn.click();
    browser.pause(3000);

    const filterWithGil = $("//input[@placeholder='Filter any column...']");
    filterWithGil.setValue("Gil");
    const rowsCount = $$("//div[@class='ag-center-cols-container']");
    rowsCount.length
    expect(rowsCount.length).equal(1,"Matching records");
    
   });

   it("Should display Primary columns in sidebars",() => {  
    GridPage.mainGrid.waitForDisplayed();
    const columnBtn = $("//button[@ref='eToggleButton']");
    columnBtn.click();
    const sidebarParticipant = $("//div[@class='ag-side-bar ag-unselectable ag-side-bar-right']//span[text()='Participant'][1]");
    const sidebarGameOfChoice = $("//div[@class='ag-side-bar ag-unselectable ag-side-bar-right']//span[text()='Game of Choice'][1]");
    const sidebarPerformance = $("//div[@class='ag-side-bar ag-unselectable ag-side-bar-right']//span[text()='Performance'][1]");
    const sidebarMonthlyBreakdown = $("//div[@class='ag-side-bar ag-unselectable ag-side-bar-right']//span[text()='Monthly Breakdown'][1]");
    expect(sidebarGameOfChoice.isDisplayed());
    expect(sidebarMonthlyBreakdown.isDisplayed());
    expect(sidebarParticipant.isDisplayed());
    expect(sidebarPerformance.isDisplayed());
   } );

 });
