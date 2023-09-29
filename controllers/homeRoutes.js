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

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
  //res.render('signup');
});

module.exports = router;
