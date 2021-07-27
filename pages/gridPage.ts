export class GridPage {
  public static get mainGrid() {
    return $('[ref="eRootWrapper"] > .ag-root-wrapper-body');
  }

  public static get sideBar() {
    return $('[ref="eRootWrapper"] .ag-side-bar');
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

  public static get sideColumnHeaders() {
    return $$('[ref="primaryColsListPanel"] [tabindex="-1"]');
  }

  public static get sideColumnHeaderss() {
    return $$('[ref="primaryColsListPanel"] > [tabindex="-1"]');
  }

  public static get sideColumnIcon() {
    return $(
      '//div[@class="ag-column-select-header"]//span[@class="ag-icon ag-icon-tree-open"]'
    );
  }

  public static get nameSearchBox() {
    return $('[aria-label="Name Filter Input"]');
  }

  public static get nameResult() {
    return $('[ref="eCellValue"]');
  }

  public static get octGrid() {
    return $$('//div[@col-id="oct" and @role="gridcell"]');
  }

  public static get octCell() {
    return $('(//span[text()="Oct"])[1]');
  }
}
