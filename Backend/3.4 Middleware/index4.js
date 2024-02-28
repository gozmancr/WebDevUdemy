import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();
const port = 3000;
var disp = "";

app.use(bodyParser.urlencoded({ extended: true}));

function  badName(req, res, next){
  console.log(req.body);
  disp = req.body.street + req.body.pet;
  next();
}

app.use(badName);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1> Youre name is:</h1>${disp}`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
