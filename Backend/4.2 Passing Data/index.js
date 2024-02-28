import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  console.log(req.body["fName"]);
  const i = req.body["fName"] + req.body["lName"];
  const len = i.length;
  console.log(len); 
  // res.render("index.ejs", {
  //   Lung: len
  // });
  const data = {
    Lung: len,
  }
  res.render("index.ejs", data)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
