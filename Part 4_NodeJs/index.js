const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = 4000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/fastCoDB');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const User = mongoose.model('User', userSchema);

app.post('/user', (req, res) => {
  const { name, age } = req.body;
  const user = new User({ name, age });
  User.create(user);
  res.send({ message: 'Successfully inserted data!!' });
});

app.get('/users', async (req, res) => {
  const data = await User.find();
  res.send({
    message: 'Successfully get data!!',
    data,
  });
});

app.delete('/user/:id', async (req, res) => {
  const data = await User.deleteOne({ _id: req.params.id });
  res.send({
    message: 'Running query successfully!!',
    data,
  });
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
