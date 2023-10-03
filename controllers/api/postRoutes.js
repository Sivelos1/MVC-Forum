const router = require('express').Router();
const { Post, Comment } = require('../../models');

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

router.post('/newComment/:id', async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      parent: req.params.id,
      author: req.session.user_id,
      time: Date.now(),
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});



router.get('/:id', async (req, res) => {
  try {
    const postInfo = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment
        },
      ],
    })
    if(postInfo){
      res.render('homepage', {
        postInfo,
        is_on_dashboard: true,
        is_users_post: (postInfo.author === req.session.user_id),
        show_comments: true,
        logged_in: req.session.logged_in,
      });
      res.status(200).json(postInfo);
    }
    else{
      res.status(500).json({message: 'Could not find a post with that id!'});
    }
  }
  catch (err){
    res.status(400).json(err);
  }
})

module.exports = router;
