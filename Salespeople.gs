var url = "https://docs.google.com/spreadsheets/d/1nge1FSH6qxh7DCRhUMFtbeWCg6egnhOSRsmNwGbSCcM/edit#gid=702202494"
var numberOfSalespeople = 3;



function updateSalesFreq () {


  var sheet = SpreadsheetApp.openByUrl(url).getSheetByName("SalesPeople");
  var startRow = 2; 
  var numRows = sheet.getLastRow() - 1; 
  var spreadsheet = sheet.getRange(startRow, 1, numRows, 5) 
  var data = spreadsheet.getValues(); 
  
  
  
  var minimum = 100000 * 100000;
  
  for (var i = 1; i <= numberOfSalespeople; i++) {
    if (data[i][3] < minimum) {
      minimum = data[i][3];
      ind = i;
    }
  }
  
  sheet.getRange(ind + 2, 4).setValue(parseInt(minimum) + 1.0);
 
  
  var name = data[ind][1];
  var number = data[ind][2];
    
  sheet.getRange(10, 6).setValue(name);
  sheet.getRange(10, 7).setValue(number);
  
  var myArray = [data[ind][0], name, number]
  return myArray;
  
}




function insertSalespersonPhoneNumber () {
  
  var tab = "Robin Tracker";
  var sheet = SpreadsheetApp.openByUrl(url).getSheetByName(tab);
  var startRow = 2; 
  var numRows = sheet.getLastRow() - 1; 
  var spreadsheet = sheet.getRange(startRow, 1, numRows, 10) 
  var data = spreadsheet.getValues();  
  

  var row = data[numRows - 1];
  
  
  var salesperson = updateSalesFreq(); 
  salesName = salesperson[1];
  salesNumber = salesperson[2];
  
  sheet.getRange(numRows + 1, nameCol).setValue(salesName);
  sheet.getRange(numRows + 1, numberCol).setValue(salesNumber);
  
  return salesperson;

}







function sendToSalespersonSpreadsheet(salesperson) {
  
  salesTab = salesperson[0];
  salesName = salesperson[1];
  salesPhone = salesperson[2];
  
  leadArray = getLead();
  leadName = leadArray[0];
  leadPhone = leadArray[1];
  leadEmail = leadArray[2];
  leadDP = leadArray[3];
  
  
  
  newSpreadsheetURL = "https://docs.google.com/spreadsheets/d/1oWFWhyTX48M1soBKCa0iekEZB4Q0rD2redNnwT6EG2g/edit#gid=0"
  var sheet = SpreadsheetApp.openByUrl(newSpreadsheetURL).getSheetByName(salesName);
  var startRow = 1; 
  var numRows = sheet.getLastRow() - 1; 
  var spreadsheet = sheet.getRange(startRow, 1, numRows, 5) 
  var data = spreadsheet.getValues(); 
  
  
  
  sheet.getRange(numRows+2, 1).setValue(new Date());
  for (var i = 0; i <= 3; i++){
    sheet.getRange(numRows + 2, i + 2).setValue(leadArray[i]);
  }
  
  updateMasterSpreadsheet(salesName);
  

  
  


}


  
