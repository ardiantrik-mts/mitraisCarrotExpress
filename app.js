const express = require('express');
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
// const router = express.Router();
const app = express();
app.use(express.json());
const dbName = 'mitraisCarrot';
const uri = 'mongodb://127.0.0.1:27017/'+dbName;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected to db'));
const port = 8080;

const itemsRoute = require('./routes/item');
app.use('/item', itemsRoute);
// const Item = require('./models/item');


// app.get("/item",function(req, res){
  
//   Item.find({},function(error, items){
//     if(error)
//       return res.send(error);
 
//     res.json(items);
//   });
 
// });

// app.post("/item",function(req,res){
        
//   var newItem=new Item({
//     "itemName" : req.body.itemName,
//     "itemStock" : req.body.itemStock,
//     "description" : req.body.description
//   });
  
//   newItem.save(function(error){
//     if(error)
//       return res.send(error);
    
//     res.send("saved");
//   });
// });

// const Item = require('./model/item');

// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// client.connect((error, client) => {
//     if (error) {
//         console.log('koneksi gagal');
//     }
// });

// app.get('/item', async (req, res) => {
//     const item = await Item.find();
//     // res.send('user hokyaa ' + req.params.id);
//     // res.json(item);
// });

// app.post('/item', (req, res) => {
    
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
