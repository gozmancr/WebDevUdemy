import express  from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    res.send("<h1>Hello wordl</h1>");
})

app.get("/contact", (req,res) =>{
    res.send("<p>Salut mai tu asta care esti</p>");
})
app.get("/about", (req,res) =>{
    res.send("<h1>0742585900</h1>");
})
app.get("/about/me", (req,res) =>{
    res.send("<h1>Hello wordlaaaa</h1>");
})
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});