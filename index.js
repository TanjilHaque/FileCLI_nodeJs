//Project Start

const { profileEnd } = require("console");
const fs = require("fs");
const path = require("path");

let command = process.argv[2];
let folderName, fileName, newFileName, data, folderPath, targetPath, oldPath, newPath;

if ((command === "write" || command === "read") && process.argv[3] && process.argv[3].includes(".")) {
  fileName = process.argv[3];
  data = process.argv[4];
  folderPath = __dirname;
  targetPath = path.join(folderPath, fileName);
} else if (command === "list") {
  folderName = process.argv[3];
  targetPath = folderName ? path.join(__dirname, folderName) : __dirname;
}
else if(command === 'rename'){
  if(process.argv[3] && process.argv[3].includes(".")){
    fileName = process.argv[3];
    newFileName = process.argv[4];
    oldPath = path.join(__dirname, fileName);
    newPath = path.join(__dirname, newFileName)
  }else{
    folderName = process.argv[3];
    fileName = process.argv[4];
    newFileName = process.argv[5];
    oldPath = path.join(__dirname,folderName,fileName);
    newPath = path.join(__dirname, folderName, newFileName);
  }

}
else {
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
    fs.readFile(targetPath, "utf-8", (err, data) => {
      if (err) {
        console.log("There was an error reading the file, ", err);
      } else {
        console.log(`File Contents:\n${data}`);
        console.log("File read successfully");
      }
    });
    break;
  }

  case "list": {
    // read Directory (reddir) takes only 2 arguments --> path, callback

    fs.readdir(targetPath, (err, data) => {
      if (err) {
        console.log("error happend in list: ", err);
      } else {
        data.forEach((item, idx) => {
          console.log(`The list number ${idx + 1} item is: ${item}`);
        });
      }
    });
    break;
  }
  // takes 3 arguments
  case "rename": {
    fs.rename(oldPath, newPath, (err)=>{
      if(err){
        console.log("There has been an error renaming the file");
      }else{
        console.log("File rename successful")
      }
    })
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
