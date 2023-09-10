const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fastCoDB');
const scheduleSchema = new mongoose.Schema({
  name: String,
  time: String,
});
const Schedule = mongoose.model('Schedule', scheduleSchema);

router.post(
  '/',
  body('name').notEmpty().trim().escape(),
  body('time').notEmpty().trim().escape(),
  async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const { name, time } = req.body;
      const sched = new Schedule({ name, time });
      const data = await Schedule.create(sched);
      return res.send({ message: 'Successfully insert data!!', data });
    }
    res.send({ errors: result.array() });
  }
);

router.get('/', async (req, res) => {
  const data = await Schedule.find();
  res.send({ message: 'Successfully get data!!', data });
});

router.put(
  '/:id',
  body('name').notEmpty().trim().escape(),
  body('time').notEmpty().trim().escape(),
  async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const { name, time } = req.body;
      const data = await Schedule.updateOne(
        { _id: req.params.id },
        { name, time }
      );
      return res.send({
        message: 'Running query successfully!!',
        data,
      });
    }
    res.send({ errors: result.array() });
  }
);

router.delete('/:id', async (req, res) => {
  const data = await Schedule.deleteOne({ _id: req.params.id });
  res.send({
    message: 'Running query successfully!!',
    data,
  });
});

module.exports = router;
