

function updateMasterSpreadsheet(salesName) {
  
  var salesColumn = 6;
  
  
  var masterURL = "https://docs.google.com/spreadsheets/d/1lquxg1QJT676RsuGiQJGtq98FMcHsu498c3k_DXNxW0/edit#gid=0"
  tab = 0;
  var sheet = SpreadsheetApp.openByUrl(masterURL).getSheets()[tab];
  var startRow = 2; 
  var numRows = sheet.getLastRow() - 1; 
  var spreadsheet = sheet.getRange(startRow, 1, numRows, 15) 
  var data = spreadsheet.getValues(); 
  
  sheet.getRange(numRows+1, salesColumn).setValue(salesName);


}
