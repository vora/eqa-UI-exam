import { Element } from "@wdio/sync";
import { Page } from "../pages/page";

let sidebarColumnGroupLabels = [];
let secColumnHeaderLabels = [];
let secColumnHeaderResult = [];
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

  public static get secColumnHeader() {
    return $$('[aria-rowindex="2"] > [role="columnheader"]');
  }

  public static get primaryColumnHeaderLables() {
    return this.columnHeader.map(val => val.getText()).filter(val =>val!="")
  }

  public static get sidebarColumnLabels() {
    for(let i=0; i<4; i++){ // This is not the ideal way - but in limited time I could think of only this
      this.sideBar.$$(`.ag-column-select-list [role='treeitem']`).
      forEach((ele) => {
        ele.scrollIntoView();
          sidebarColumnGroupLabels.push(ele.$(`span[ref='eLabel']`).getText()); 
      }); 
      browser.keys('\uE00F');
    }
    return [...new Set(sidebarColumnGroupLabels)];
  }

  public static get secColumnHeaderLabels() {
    for(let i=0; i<5; i++){ // This is not the ideal way - but in limited time I could think of only this
      this.secColumnHeader.
      map((ele) => {
        ele.scrollIntoView();
          secColumnHeaderLabels.push(ele.$(`.ag-header-cell-text`).getText()); 
      }); 
      browser.keys('\uE014');
    }
    return [...new Set(secColumnHeaderLabels.filter(val =>val!=""))];
  }

  public static filterSecHeader(headerName, value){
      $$(`.ag-header-row .ag-input-wrapper`).
      map((ele) => {
          if(ele.$(`input`).getAttribute(`aria-label`).startsWith(`${headerName}`)){
            ele.$(`input`).setValue(value);
          }    
      }); 
  }

  public static filterSecHeaderResult(headerName, filterValues){
      for(let value of filterValues){
        this.filterSecHeader(headerName, value);
        browser.pause(1000);
        secColumnHeaderResult.push($(`.ag-center-cols-container`).$$(`[col-id=${headerName.toLowerCase()}] .ag-cell-value`).map(ele => ele.getText()).filter(val =>val!=""));
      }
      return secColumnHeaderResult;
  }

  public static colValues(colName) {

      this.secColumnHeader.
      forEach((ele) => {  
        do{
          ele.keys('\uE004');
          browser.pause(1000);
          
        }while(ele.$(`span[ref=eText]`).getText().indexOf('Oct') > -1)
      });
      // $$(`[ref="centerContainer"] [col-id=${colName}]`).
      // map((ele) => {
      //   ele.scrollIntoView();
      // }); 
      // browser.keys('\uE014');
    }
}
