const newPostButton = document.querySelector('.makeNewPost');

const makeNewPostHandler = async (event) => {
  event.preventDefault();
  
  document.location.replace('/newPost');
};

newPostButton.addEventListener('submit', makeNewPostHandler);

