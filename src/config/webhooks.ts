
// Configuration for webhook URLs
// Add your Google Sheets webhook URL here for form submissions
export const GOOGLE_SHEETS_WEBHOOK_URL = "https://docs.google.com/spreadsheets/d/1LfAvQD4yqt4S1p27ws0VNGVtlr_-nu6phJkhSni2Lzc/edit?usp=sharing";

// To set up Google Sheets integration:
// 1. Create a Google Apps Script with a doPost function
// 2. Deploy it as a web app with execute permissions for "Anyone"
// 3. Copy the deployment URL and paste it above
// 4. Example URL format: https://script.google.com/macros/s/your-script-id/exec

// Example Google Apps Script code:
/*
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.email,
    data.businessType,
    data.automation,
    data.source
  ]);
  
  return ContentService.createTextOutput("Success");
}
*/
