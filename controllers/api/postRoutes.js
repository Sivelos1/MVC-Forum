const router = require('express').Router();
const { Post } = require('../../models');

router.post('/newPost', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      author: req.session.user_id,
      time: Date.now(),
    });
    console.log(newPost);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
