/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import { writeFile } from 'node:fs';
import fs from "fs";

var inq = inquirer;

inq
  .prompt([
    {
      name: "link",
      message: "What is your link?",
    },
  ])
  .then((answer) => {
    console.log("Hello " + answer.link);
    var userLink = answer.link;
    
    var qr_svg = qr.image(userLink);
    qr_svg.pipe(fs.createWriteStream("qr_img1.png"));
    
    
    writeFile('linkToQr.txt', userLink, 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  });

