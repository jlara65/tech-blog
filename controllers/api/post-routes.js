const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');

// get all posts
router.get('/', (req, res) => {
  console.log('===================');
  Post.findAll()
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get /api/Post/1
router.get('/:id', (req, res) => {});

// POST /api/posts
router.post('/', (req, res) => {
  // expects {title: 'first post ever!!', post_text: 'I am about to fill with randoms data into post text', user_id: 1}
  Post.create({
    title: req.body.title,
    post_text: req.body.post_text,
    user_id: req.body.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/posts/1
router.put('/:id', (req, res) => {});

// DELETE /api/posts/1
router.delete('/:id', (req, res) => {});

module.exports = router;
