//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var IsOkk = false; 

app.use(bodyParser.urlencoded({ extended: true}));

function secret(req, res, next){
    console.log(IsOkk);
    console.log(req.body["password"]);
    const pass = req.body["password"];
    if (pass === "ILovePrograming") {
        IsOkk = true;
    }
    next();
}

app.use(secret);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.post("/check", (req, res) =>{
   if(IsOkk == true){ 
    res.sendFile(__dirname + "/public/secret.html")
   } else {
    res.redirect("/");
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });