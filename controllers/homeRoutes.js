const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      order:[['time','ASC']]
    })
    if(postData){
      const posts = postData.map((post) => post.get({plain: true}));
      res.render('homepage', {
        posts,
        hasPosts: true,
        logged_in: req.session.logged_in,
      });
    }
    else{
      res.render('homepage', {
        hasPosts: false,
        logged_in: req.session.logged_in,
      });
    }

    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/newPost', withAuth, async (req, res) => {
  try {
    res.render('newPost', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', withAuth, async (req, res) => {
  const postInfo = await Post.findByPk(req.params.id, {
    include: [
      {
        model: Comment
      },
    ],
  })
  if(postInfo){
    res.render('post', {
      post: postInfo.get({ plain: true }),
      is_on_dashboard: true,
      is_users_post: (postInfo.author === req.session.user_id),
      show_comments: true,
      logged_in: req.session.logged_in,
    });
    res.status(200);
  }
  else{
    res.status(500).json({message: 'Could not find a post with that id!'});
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
