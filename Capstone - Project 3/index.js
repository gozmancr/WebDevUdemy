import express from "express";
import methodOverride from "method-override"
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static("public"));

let items = [
    { id: 1, name: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.' },
    { id: 2, name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
];


app.get('/items', (req, res) => {
    res.render('index.ejs', { items });
    

});
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name,
    };

    items.push(newItem);
    res.redirect('/items');
    
});

app.delete('/deleteitems',(req,res)=>{
    const id = parseInt(req.body.id);
    console.log(id);
    // for (var i = 0; i < items.length; i++) {
    //     if (items[i]["id"] == req.body.id) {
    //         delete items[i];
    //     }
    //  }
    items = items.filter(item => item.id !== id);
    res.redirect('/items');
})

app.post('/update',(req, res)=>{
    const id1 = parseInt(req.body.id1);
    console.log(id1);
    const name = req.body.name;
    const editvalue = req.body.edit;
    console.log(editvalue);
    
    for (var i = 0; i < items.length; i++) {
       if (items[i]["id"] == req.body.id1) {
        items[i]["name"] = editvalue; 
       }
    }
    console.log(items);
    res.redirect('/items');
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});