import { Page } from "../pages/page";

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

  public static get columnheaderTextParticipant(){
    return $("(//*[text()='Participant'])[1]");
  }

  public static get columnheaderTextGameOfChoice(){
    return $("(//*[text()='Game of Choice'])[1]");
  }

  public static get columnheaderTextPerformance(){
    return $("(//*[text()='Performance'])[1]");
  }

  public static get columnheaderTextMonthlyBreakdown(){
    return $("(//*[text()='Monthly Breakdown'])[1]");
  }


  public static get Primary_sidebarOptions_Participant(){
    return $("//div[@class='ag-virtual-list-item ag-column-select-virtual-list-item']/div/div/following-sibling::span/following-sibling::span[text()='Participant']");
  
  }

  public static get Primary_sidebarOptions_gameOfChoice(){
    return $("//div[@class='ag-virtual-list-item ag-column-select-virtual-list-item']/div/div/following-sibling::span/following-sibling::span[text()='Game of Choice']");
  
  }

  public static get Primary_sidebarOptions_Performance(){
    return $("//div[@class='ag-virtual-list-item ag-column-select-virtual-list-item']/div/div/following-sibling::span/following-sibling::span[text()='Performance']");
  
  }

  public static get Primary_sidebarOptions_MonthlyBreakdown(){
    return $("//div[@class='ag-virtual-list-item ag-column-select-virtual-list-item']/div/div/following-sibling::span/following-sibling::span[text()='Monthly Breakdown']");
  
  }



  public static get secondaryCH_Name(){
    return $("//div[@class='ag-cell-label-container ag-header-cell-sorted-none']/span/following-sibling::div/span[text()='Name']");
  }
  
  public static get secondaryCH_Lang(){
    return $("//div[@class='ag-cell-label-container ag-header-cell-sorted-none']/span/following-sibling::div/span[text()='Language']");
  }

  public static get secondaryCH_Country(){
    return $("//div[@class='ag-cell-label-container ag-header-cell-sorted-none']/span/following-sibling::div/span[text()='Country']");
  }


  public static get secondary_sidebarOptions_name(){
    return $("//div[@class='ag-virtual-list-item ag-column-select-virtual-list-item']/div/div/following-sibling::span/following-sibling::span[text()='Name']");
  
  }

  public static get secondary_sidebarOptions_lang(){
    return $("//div[@class='ag-virtual-list-item ag-column-select-virtual-list-item']/div/div/following-sibling::span/following-sibling::span[text()='Language']");
  
  }

  public static get secondary_sidebarOptions_country(){
    return $("//div[@class='ag-virtual-list-item ag-column-select-virtual-list-item']/div/div/following-sibling::span/following-sibling::span[text()='Country']");
  
  }

  
  
  public static get inputNameField(){
   return $("//div[@class='ag-input-wrapper']/input");

}



public static get returnRowsAfterSearchingInputValues(){
    //return $("(//div[@class='ag-row ag-row-no-focus ag-row-even ag-row-level-0 ag-row-position-absolute ag-row-first'])[2]")
    return $("(//*[@class='ag-center-cols-container']/div[@role='row'])[1]")
}
//ag-row ag-row-no-focus ag-row-odd ag-row-level-0 ag-row-position-absolute
//ag-row ag-row-no-focus ag-row-even ag-row-level-0 ag-row-position-absolute ag-row-first
/*public static get returnodd_tony_Isabella_RowsAfterSearchingInputValues(){
  return $("(//*[@class='ag-row ag-row-no-focus ag-row-level-0 ag-row-position-absolute ag-row-odd'])[2]")
}*/


public static get clickOnOctFilter(){
  return $("//*[@class='ag-floating-filter-button-button']/../../../div[8]/div[@class='ag-floating-filter-button']")
}

public static get selectLessThanDropdown(){
  //return $("//*[@id='1367-display']")
 // return $("//*[@aria-describedby='1367-display']")
 return $("//*[@aria-describedby='1367-display']/div[text()='Equals']")
}


}
