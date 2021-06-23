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
// const port = 8080;

app.use((req, res, next) => {
  console.log("Method : "+req.method+" | URL: "+ req.originalUrl +" | Time : " + Date());
  next();
});

const itemsRoute = require('./routes/item');
app.use('/item', itemsRoute);

const usersRoute = require('./routes/user');
app.use('/user', usersRoute);

const rolesRoute = require('./routes/role');
app.use('/role', rolesRoute);

app.get('*', function(req, res){
  res.status(404).send({ "message" : "Data tidak ditemukan!" });
});


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

module.exports = app;
// export default app;