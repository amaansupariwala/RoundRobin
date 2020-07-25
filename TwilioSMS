
/* Function to Send Individual SMS 
Takes in a phone number and a body
Returns null
*/


function sendSms (toSend, body) {
  
  var myurl = "https://api.twilio.com/2010-04-01/Accounts/SECURITY_TOKEN/Messages.json";

  var payload = {
    "To": toSend,
    "Body" : body,
    "From" : "(678) 498-5985"
  };

  var options = {
    "method" : "post",
    "payload" : payload
  };

  options.headers = { 
    "Authorization" : "Basic " + Utilities.base64Encode("SECURITY_TOKEN:ACCOUNT_ID")
  };

  UrlFetchApp.fetch(myurl, options);
  
}

