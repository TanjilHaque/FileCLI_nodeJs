//Project Start

const fs = require("fs");
const path = require("path");

let command = process.argv[2];
let folderName, fileName, data, folderPath, targetPath;

switch (command) {
  case "write":
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
