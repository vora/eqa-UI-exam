import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

describe("Load AG Grid", () => {
  before(() => {
    Page.open();
    
  });

  it.skip("Should display the grids", () => {
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is displayed.*/
     
    GridPage.columnHeader.forEach((el) => {
      browser.pause(5000);
      expect(el.isDisplayed()).to.eql(true);
    });
    
  });


    it.skip("Validate primary Columns headers should have following texts-Test1", () => {
      GridPage.mainGrid.waitForDisplayed();
      console.log(GridPage.columnheaderTextParticipant.isDisplayed());
      
      const participantText=GridPage.columnheaderTextParticipant.getText();
      expect(participantText).equal('Participant');

    
      console.log(GridPage.columnheaderTextGameOfChoice.isDisplayed());
      
      const gameOfChoiceText=GridPage.columnheaderTextGameOfChoice.getText();
      expect(gameOfChoiceText).equal('Game of Choice');
      

      console.log(GridPage.columnheaderTextPerformance.isDisplayed());
      
      const performanceText=GridPage.columnheaderTextPerformance.getText();
      expect(performanceText).equal('Performance');


      GridPage.columnheaderTextMonthlyBreakdown.scrollIntoView();
      console.log(GridPage.columnheaderTextMonthlyBreakdown.isDisplayed());
      
      const MonthlyBreakdownText=GridPage.columnheaderTextMonthlyBreakdown.getText();
      expect(MonthlyBreakdownText).equal('Monthly Breakdown');
      
     // console.log(GridPage.columnheaderTextGameOfChoice.getText());
      //console.log(GridPage.columnheaderTextGameOfChoice.isDisplayed());

     

      

 });

 it("Validate that the Primary Column Headers are available in the Columns Sidebar options", () => {
  GridPage.mainGrid.waitForDisplayed();
/*Used localeCompare to verify column headeres are in sidebar options
  /*Secondary Column - Name */
  var primaryColHeaderString_participant=GridPage.columnheaderTextParticipant.getText();
  console.log(primaryColHeaderString_participant);

  GridPage.Primary_sidebarOptions_Participant.scrollIntoView();
  var sideHeaderString_participant=GridPage.Primary_sidebarOptions_Participant.getText();
  console.log(sideHeaderString_participant);
  console.log("Strings comparision from Column header to Sidebaroptions-Participant");
  console.log(primaryColHeaderString_participant.localeCompare(sideHeaderString_participant));
  var result=primaryColHeaderString_participant.localeCompare(sideHeaderString_participant);

  if(result<0){
    console.log("strings are not equal");
  }
  else if(result>0){
    console.log("strings are not equal");
  }
  else{
    console.log("Primary Column Headers are available in the Columns Sidebar options");
  }
    
  /*Secondary Column - Language */

  var primaryColHeaderString_GameOfChoice=GridPage.columnheaderTextGameOfChoice.getText();
  console.log(primaryColHeaderString_GameOfChoice);

  GridPage.Primary_sidebarOptions_gameOfChoice.scrollIntoView();
  var sideHeaderString_gameOfChoice=GridPage.Primary_sidebarOptions_gameOfChoice.getText();
  console.log(sideHeaderString_gameOfChoice);
  console.log("Strings comparision from Column header to Sidebaroptions-gameOfChoice");
 var result= primaryColHeaderString_GameOfChoice.localeCompare(sideHeaderString_gameOfChoice);
 if(result<0){
  console.log("strings are not equal");
}
else if(result>0){
  console.log("strings are not equal");
}
else{
  console.log("Primary Column Headers are available in the Columns Sidebar options");
}

  /*Secondary Column - Performance  */
  var primaryColHeaderString_performance=GridPage.columnheaderTextPerformance.getText();
  console.log(primaryColHeaderString_performance);

  GridPage.Primary_sidebarOptions_Performance.scrollIntoView();
  var sideHeaderString_performance=GridPage.Primary_sidebarOptions_Performance.getText();
  console.log(sideHeaderString_performance);
  console.log("Strings comparision from Column header to Sidebaroptions-Performance");
  var result=primaryColHeaderString_performance.localeCompare(sideHeaderString_performance);
  if(result<0){
    console.log("strings are not equal");
  }
  else if(result>0){
    console.log("strings are not equal");
  }
  else{
    console.log("Primary Column Headers are available in the Columns Sidebar options");
  }

/*Secondary Column - Monthly Breakdown  */
  var primaryColHeaderString_breakdown=GridPage.columnheaderTextMonthlyBreakdown.getText();
  console.log(primaryColHeaderString_breakdown);

  GridPage.Primary_sidebarOptions_MonthlyBreakdown.scrollIntoView();
  var sideHeaderString_monthlyBreakdown=GridPage.Primary_sidebarOptions_MonthlyBreakdown.getText();
  console.log(sideHeaderString_monthlyBreakdown);
  console.log("Strings comparision from Column header to Sidebaroptions-monthlyBreakdown");
  var result=sideHeaderString_monthlyBreakdown.localeCompare(primaryColHeaderString_breakdown);
  if(result<0){
    console.log("strings are not equal");
  }
  else if(result>0){
    console.log("strings are not equal");
  }
  else{
    console.log("Primary Column Headers are available in the Columns Sidebar options");
  }
 });

 it.skip("Grab Secondary column headers should have same text as sidebar options", () => {
  GridPage.mainGrid.waitForDisplayed();

  var secondaryColHeaderString=GridPage.secondaryCH_Name.getText();
  console.log(secondaryColHeaderString);

  GridPage.secondary_sidebarOptions.scrollIntoView();
  var sec_sideOptionsString=GridPage.secondary_sidebarOptions.getText();
  console.log(sec_sideOptionsString);
  console.log("Strings comparision");
  console.log(secondaryColHeaderString.localeCompare(sec_sideOptionsString));


 });

 it.skip("Input text such as gil,tony,isabella and verify return result is displayed-Test4", () => {
  GridPage.mainGrid.waitForDisplayed();

  
  GridPage.inputNameField.click();
  browser.pause(3000);

  /*enter name for Gil*/

  GridPage.inputNameField.setValue("gil");
  browser.pause(3000);



  /*return first row values*/
  const gilText=GridPage.returnRowsAfterSearchingInputValues.isDisplayed();
  expect(gilText).to.equal(true); 
 
  /*enter name for Tony*/
  
  GridPage.inputNameField.clearValue();
  GridPage.inputNameField.setValue("tony");
  browser.pause(5000);

  

  /*return first row values*/
  const tonyText=GridPage.returnRowsAfterSearchingInputValues.isDisplayed();
  expect(tonyText).to.equal(true); 

  /*Enter name for Isabella*/
  
  GridPage.inputNameField.clearValue();
  GridPage.inputNameField.setValue("Isabella");
  browser.pause(3000);

  

  /*return first row values*/
  const IsabellaText= GridPage.returnRowsAfterSearchingInputValues.isDisplayed();
  expect(IsabellaText).to.equal(true); 

  /*Enter name for Poppy*/
  
  GridPage.inputNameField.clearValue();
  GridPage.inputNameField.setValue("Poppy");
  browser.pause(3000);

  

  /*return first row values*/
  const poppyText=GridPage.returnRowsAfterSearchingInputValues.isDisplayed();
  expect(poppyText).to.equal(true);

 });

 /*click on filter of October*/ 
 it.skip("Click on oct filter and enter value less than 5000", () => {
  GridPage.mainGrid.waitForDisplayed();
  //GridPage.clickOnOctFilter.scrollIntoView();

  //GridPage.clickOnOctFilter.click();
  const eleFilter=$("//*[@class='ag-floating-filter-button-button']/../../../div[8]/div[@class='ag-floating-filter-button']");
  const eleOct=$("(//*[@class='ag-cell-label-container ag-header-cell-sorted-none'])[7]");
  eleFilter.scrollIntoView();
  browser.pause(3000);
  eleFilter.click();
  browser.pause(5000);
 /*select dropdown lessthan*/ 

 

  //const eleEquals=$("//*[@aria-describedby='1367-display']/div[text()='Equals']");
  const eleEquals=$("(//*[@class='ag-filter-wrapper ag-focus-managed']/div/div/div/div[text()='Equals'])[1]");
  eleEquals.scrollIntoView();

  eleEquals.click();
  browser.pause(3000);
  browser.keys('Down arrow');
  browser.pause(2000);
  browser.keys('Down arrow');
  browser.pause(3000);
  browser.keys('Enter');
  browser.pause(3000);

 /*input for value 5000*/ 
  const filterInput=$("(//div[@class='ag-filter-body']/div/div/input[@type='number'])[1]");
  filterInput.scrollIntoView();
  browser.pause(3000);
  filterInput.click();
  browser.pause(3000);
  filterInput.setValue(5000);
  browser.pause(3000);
  filterInput.click();
  //eleEquals.selectByIndex(3);
  //GridPage.selectLessThanDropdown.click();
  //browser.pause(3000);
  //GridPage.selectLessThanDropdown.selectByVisibleText("Less than");

 /*validate result less than 5000*/

 const row1_result=$("(//div[@row-index=1])[1]/div[@col-id='oct']");
 row1_result.scrollIntoView();
 
 var rowresult1=row1_result.getText();
 console.log(rowresult1);

 const row2_result=$("(//div[@row-index=1])[2]/div[@col-id='oct']");
 
 row2_result.scrollIntoView();
 var rowresult2=row2_result.getText();
 console.log(rowresult2);

 const row3_result=$("(//div[@row-index=1])[3]/div[@col-id='oct']");
 row3_result.scrollIntoView();
 var rowresult3=row3_result.getText();
 console.log(rowresult3);

 const row4_result=$("(//div[@row-index=1])[4]/div[@col-id='oct']");
 row4_result.scrollIntoView();
 var rowresult4=row4_result.getText();
 console.log(rowresult4);

 let value = 5000;
 //let number = 1;
 if (parseInt(rowresult1) < value){
  	console.log("Return result value is lesser then 5000");
 }


 });


  

});


