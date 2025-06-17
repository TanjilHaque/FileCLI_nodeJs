//Project Start

const fs = require("fs");
const path = require("path");

let command = process.argv[2];
let folderName, fileName, data, folderPath, targetPath;


if (process.argv[3].includes(".")) {
  fileName = process.argv[3];
  data = process.argv[4];
  folderPath = __dirname;
  targetPath = path.join(folderPath, fileName);
} else {
  folderName = process.argv[3];
  fileName = process.argv[4];
  data = process.argv[5];
  folderPath = path.join(__dirname, folderName);
  targetPath = path.join(folderPath, fileName);
}


switch (command) {
  case "write":
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    // writeFile only takes 3 arguments --> path, data, callback
    fs.writeFile(targetPath, data, (err) => {
      if (err) {
        console.log("Error writing file, ", err);
      } else {
        console.log("File has been written successfully!");
      }
    });
    break;

  case "read": {
    //read file takes 3 arguments --> path, encoding, callback
    fs.readFile(targetPath, "utf-8", (err, data)=>{
      if(err){
        console.log("There was an error reading the file, ", err);
      }else{
        console.log(`File Contents:\n${data}`);
        console.log("File read successfully");
      }
    })
    break;
  }

  case "list": {
    break;
  }
  case "rename": {
    break;
  }
  case "replace": {
    break;
  }
  case "remove": {
    break;
  }

  case "addText": {
    break;
  }
  case "addTextNew": {
    break;
  }
  default:
    console.log("Unknown Command");
}
