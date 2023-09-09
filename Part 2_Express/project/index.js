const express = require('express');
const mongoose = require('mongoose');
const loggerMiddleware = require('./loggerMiddleware');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'files/' });

const port = 3000;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/fastCoDB');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const User = mongoose.model('User', userSchema);

const itemSchema = new mongoose.Schema({
  name: String,
  stock: Number,
  price: Number,
});
const Item = mongoose.model('Item', itemSchema);

app.use(loggerMiddleware);

app.post('/insert', (req, res) => {
  const user1 = new User({
    name: 'Frans',
    age: 35,
  });
  const user2 = new User({
    name: 'John',
    age: 28,
  });
  User.insertMany([user1, user2]);
  res.send({ message: 'Successfully inserted data!!' });
});

app.post('/insert/item-part-3', (req, res) => {
  for (let i = 0; i < 100; i++) {
    const stock = Math.floor(Math.random() * 300) + 1;
    const price = Math.floor(Math.random() * 100000) + 1000;
    const item = new Item({ name: `item-${i + 1}`, stock, price });
    Item.create(item);
  }
  res.send({ message: 'Successfully inserted data!!' });
});

app.post('/upload', upload.single('file'), (req, res) => {
  const oldPath = req.file.path;
  const newPath = `${req.file.destination}${req.file.originalname}`;
  fs.renameSync(oldPath, newPath);
  res.send({ message: 'Successfully upload file to server!!' });
});

app.get('/', async (req, res) => {
  const data = await User.find();
  res.send({
    message: 'Successfully get data!!',
    data,
  });
});

app.get('/item', async (req, res) => {
  const data = await Item.find();
  res.send({
    message: 'Successfully get data!!',
    data,
  });
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
