import { Page } from "../pages/page";

export class GridPage {
  public static get mainGrid() {
    return $('[ref="eRootWrapper"] > .ag-root-wrapper-body');
  }

  public static get sideBar() {
    return $('[ref="eRootWrapper"] .ag-side-bar');
  }

  public static get sideBarSearch() {
    return $('//input[@placeholder="Search..."]');
  }

  public static get nameFilterSearch() {
    return $('//input[@aria-label="Name Filter Input"]');
  }

  public static get octFilterSearch() {
    return $('//input[@placeholder="Filter..."]');
  }

  public static get octFilterSearchButton() {
    return $('//input[@aria-label="Oct Filter Input"]/ancestor::div[@role="gridcell"]//button');
  }

  public static get displayFieldPicker() {
    return $('//div[@ref="eDisplayField"]');
  }

  public static get gridContainer() {
    return $(
      '[ref="eRootWrapper"] > .ag-root-wrapper-body [ref="eCenterContainer"]'
    );
  }

  public static get colName() {
    return $$('[ref="eCenterContainer"] [col-id="name"]');
  }

  public static get colDecember() {
    return $$('[ref="eCenterContainer"] [col-id="dec"]');
  }

  public static get columnHeader() {
    return $$('[aria-rowindex="1"] > [role="columnheader"]');
  }

  public static get nameFilterSearchResults() {
    return $$('//div[@col-id="name"][@role="gridcell"]//span[@ref="eCellValue"]');
  }

  public static get octFilterSearchResults() {
    return $$('//div[@col-id="oct"][@role="gridcell"]');
  }

  public static get columnSecondaryHeader() {
    return $$('//*[@ref="eLabel"]/span/..');
  }
}
