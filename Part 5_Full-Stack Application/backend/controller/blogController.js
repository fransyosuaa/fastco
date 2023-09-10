const express = require('express');
const router = express.Router();
const { query, body, validationResult } = require('express-validator');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fastCoDB');
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const Blog = mongoose.model('Blog', blogSchema);

router.post(
  '/',
  body('title').notEmpty().trim().escape(),
  body('content').notEmpty().trim().escape(),
  async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const { title, content } = req.body;
      const blog = new Blog({ title, content });
      const data = await Blog.create(blog);
      return res.send({ message: 'Successfully insert data!!', data });
    }
    res.send({ errors: result.array() });
  }
);

router.get('/', query('q').optional().trim().escape(), async (req, res) => {
  const { q } = req.query;
  if (q) {
    const pattern = new RegExp(`.${q}.`, 'i');
    const data = await Blog.find({ title: pattern });
    return res.send({ message: 'Successfully get data!!', data });
  }
  const data = await Blog.find();
  res.send({ message: 'Successfully get data!!', data });
});

module.exports = router;
