const express = require("express");
const router = express.Router();
var { google } = require("googleapis");
const Ques = require("../schema/ques");

const googleApi = ()=>{
   var next = [];
  let secretKey = require("../teste.json");
  let jwtClient = new google.auth.JWT(
    secretKey.client_email,
    null,
    secretKey.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );
  //authenticate request
  jwtClient.authorize(function (err, tokens) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Successfully connected!");
    }
  });

  //Google Sheets API
  let spreadsheetId = "1Mjz9tF5Sz2Q3TRvdzloSlDVJNqNgkjSCKwla6QF_7Ps";
  let sheetRange = "A2:G";
  let sheets = google.sheets("v4");
  sheets.spreadsheets.values.get(
    {
      auth: jwtClient,
      spreadsheetId: spreadsheetId,
      range: sheetRange,
    },
    function (err, response) {
      if (err) {
        console.log("The API returned an error: " + err);
      } else {
        console.log("Data got from Google Sheets:");
        //   console.log(response.data.values);
        const dataE = response.data.values;
        
        dataE.forEach(async (item) => {
          const q = item[0],
            option_a = item[1],
            option_b = item[2];
          const option_c = item[3],
            option_d = item[4],
            ans = item[5];
          const exp = item[6];
          //  console.log("Q.",item[0]," A.",item[1]);

         //  const errors = validationResult(item);
         //  if (!errors.isEmpty()) {
         //    return res.status(400).json({ errors: errors.array() });
         //  }

          const question = new Ques({
            qu: q,
            optionA: option_a,
            optionB: option_b,
            optionC: option_c,
            optionD: option_d,
            ans: ans,
            explanation: exp,
          });


         var savedNotes = await question.save();
         //   console.log(next);
          next.push(question);
        });
        //   res.render('test');
      }
   }
   );

   console.log(next);
   return next;
}

router.get("/", async (req, res) => {
  console.log("Hello");

  var next = googleApi();
  setTimeout(()=>{res.json(next)}, 3000);
});

module.exports = router;
