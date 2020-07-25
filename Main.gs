var url = "https://docs.google.com/spreadsheets/d/1nge1FSH6qxh7DCRhUMFtbeWCg6egnhOSRsmNwGbSCcM/edit#gid=702202494"
var numberCol = 2;
var nameCol = 1;
var bodyCol = 2;
var statusCol = 8;



function main () {
  
  
  // check for already sent messages
  var tab = "Robin Tracker";
  var sheet = SpreadsheetApp.openByUrl(url).getSheetByName(tab);
  var startRow = 2; 
  var numRows = sheet.getLastRow() - 1; 
  var spreadsheet = sheet.getRange(startRow, 1, numRows, 10) 
  var data = spreadsheet.getValues();  
  var row = data[numRows - 1];
  
  if (row[0]) {
     sheet.getRange(numRows + 1, 10).setValue(row[nameCol-1]);
     return;
  }
  
   // to avoid duplicates
  
  
  
  var salesperson = insertSalespersonPhoneNumber();
  sendLast();
  sendToSalespersonSpreadsheet(salesperson);
  

}






