import React, { useState } from "react";
import * as XLSX from "xlsx";

class ExcelToJson extends React.Component {
   
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       file: "",
//     };
//     const Url = 'https://docs.google.com/spreadsheets/d/1Mjz9tF5Sz2Q3TRvdzloSlDVJNqNgkjSCKwla6QF_7Ps/edit#gid=0';

//     var url = document.getElementById(Url).value;
//         fetch(url)
//           .then((res) => res.blob()) // returns URL's Excel file data as a blob
//           .then((blob) => {             
//             excelIo.open( // Use the Excel IO open method to import blob to SpreadJS
//               blob,
//               (json) => {
//                 spread.fromJSON(json);
//               },
//               (message) => {
//                 console.log(message);
//               }
//             );
//           });
//   }

//   handleClick(e) {
//     this.refs.fileUploader.click();
//   }

//   getIdFromUrl(url) { 
//    return url.match(/[-\w]{25,}/); 
//  }

//   filePathset(e) {
//     e.stopPropagation();
//     e.preventDefault();
//     var file = e.target.files[0];
//    //  var file = document.getElementById(getIdFromUrl(url));
//     console.log(file);
//     this.setState({ file });

//     console.log(this.state.file);
//   }

//   readFile() {
//     var f = this.state.file;
//     var name = f.name;
//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       // evt = on_file_select event
//       /* Parse data */
//       const bstr = evt.target.result;
//       const wb = XLSX.read(bstr, { type: "binary" });
//       /* Get first worksheet */
//       const wsname = wb.SheetNames[0];
//       const ws = wb.Sheets[wsname];
//       /* Convert array of arrays */
//       const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
//       /* Update state */
//       console.log("Data>>>" + data);// shows that excel data is read
//       console.log(this.convertToJson(data)); // shows data in json format
//     };
//     reader.readAsBinaryString(f);
//   }

//   convertToJson(csv) {
//     var lines = csv.split("\n");

//     var result = [];

//     var headers = lines[0].split(",");

//     for (var i = 1; i < lines.length; i++) {
//       var obj = {};
//       var currentline = lines[i].split(",");

//       for (var j = 0; j < headers.length; j++) {
//         obj[headers[j]] = currentline[j];
//       }

//       result.push(obj);
//     }

//     //return result; //JavaScript object
//     return JSON.stringify(result); //JSON
//   }

  render() {
    return (
      <div>
        {/* <input
          type="file"
          id="file"
          ref="fileUploader"
          onChange={this.filePathset.bind(this)}
        />
        <button
          onClick={() => {
            this.readFile();
          }}
        >
          Read File
        </button> */}
      </div>
    );
  }
}

export default ExcelToJson;
