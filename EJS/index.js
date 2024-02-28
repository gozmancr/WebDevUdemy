import express from "express";

const app = express();
const port = 3000;
let type = "";
let adv = "";

function day(req, res, next){
    const today = new Date();
    const day = today.getDay();
console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }
  console.log(type);
  next();
}



app.get("/", (req, res) =>{
    app.use(day);
//     const today = new Date();
//     const day = today.getDay();
// console.log(day);
//   let type = "a weekday";
//   let adv = "it's time to work hard";

//   if (day === 0 || day === 6) {
//     type = "the weekend";
//     adv = "it's time to have some fun";
//   }
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
}); 

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });