
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  var email = data.email;
  var rows = sheet.getDataRange().getValues();
  var updated = false;

  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0] === email) {
      sheet.getRange(i + 1, 2).setValue(data.name);
      sheet.getRange(i + 1, 3).setValue(data.phone);
      sheet.getRange(i + 1, 4).setValue(data.skills);
      sheet.getRange(i + 1, 5).setValue(data.resume);
      sheet.getRange(i + 1, 6).setValue(new Date());
      updated = true;
      break;
    }
  }

  if (!updated) {
    sheet.appendRow([email, data.name, data.phone, data.skills, data.resume, new Date()]);
  }

  return ContentService.createTextOutput("Success");
}
