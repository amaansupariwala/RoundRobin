var url = "https://docs.google.com/spreadsheets/d/1nge1FSH6qxh7DCRhUMFtbeWCg6egnhOSRsmNwGbSCcM/edit#gid=702202494"
var numberColumn = 1;
var bodyColumn = 2;
var statusCol = 8;


/* 
   will send the LAST row's text message
*/
function sendLast () {
  
  
  var tab = "Robin Tracker";
  var sheet = SpreadsheetApp.openByUrl(url).getSheetByName(tab);
  var startRow = 2; 
  var numRows = sheet.getLastRow() - 1; 
  var spreadsheet = sheet.getRange(startRow, 1, numRows, 10) 
  var data = spreadsheet.getValues();  
  

  var row = data[numRows - 1];
  
  
  //sheet.getRange(numRows + 1, 1).setValue(updateSalesFreq());
  
  try {
      response_data = sendSms(row[numberColumn], row[bodyColumn]);
      status = "sent";
    } catch(err) {
      Logger.log(err);
      status = "error";
    }
  
  /* Setting the status of the delivery of the text message */
  sheet.getRange(numRows+1, statusCol).setValue(status);
  
  
}















/* Sends all Body Messages to all Phone Numbers
primarily for testing purposes
*/
function sendAll () {
  
  /* Pull the data of the active sheet and define variables */
  var tab = "Robin Tracker";
  var sheet = SpreadsheetApp.openByUrl(url).getSheetByName(tab);
  var startRow = 2; 
  var numRows = sheet.getLastRow() - 1; 
  var spreadsheet = sheet.getRange(startRow, 1, numRows, statusCol+1) 
  var data = spreadsheet.getValues();
  
  
  for (i in data) {
    //iterate through all the rows

    var row = data[i];
    
    /* Try to send the text message, show error if message failure */
    
    try {
      response_data = sendSms(row[numberColumn], row[bodyColumn]);
      status = "sent";
    } catch(err) {
      Logger.log(err);
      status = "error";
    }
    sheet.getRange(startRow + Number(i), statusCol).setValue(status);
  }
}







function getLead() {
  
  var tab = "Robin Tracker";
  var sheet = SpreadsheetApp.openByUrl(url).getSheetByName(tab);
  var startRow = 2; 
  var numRows = sheet.getLastRow() - 1; 
  var spreadsheet = sheet.getRange(startRow, 1, numRows, 10) 
  var data = spreadsheet.getValues(); 
  row = data[numRows-1];
  
  
  return [row[3], row[4], row[5], row[6]];

}



