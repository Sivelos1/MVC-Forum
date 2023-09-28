const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Post belongs to User
Post.belongsTo(User, {
    foreignKey: 'author',
});

// Comment belongs to User as well
Comment.belongsTo(User, {
    foreignKey: 'author'
})
  
// User can have many posts and comments
User.hasMany(Post);

User.hasMany(Comment);

// Comment belongs to post
Comment.belongsTo(Post, {
    foreignKey: 'parent'
})

// Post can have many comments
Post.hasMany(Comment);


module.exports = { User, Post, Comment };
