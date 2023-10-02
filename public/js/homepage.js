const makeNewPostHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/newPost');
};
document
  .querySelector('#makeNewPost')
  .addEventListener('submit', makeNewPostHandler);
