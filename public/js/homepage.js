const newPostButton = document.querySelector('.makeNewPost');

const makeNewPostHandler = async (event) => {
  event.preventDefault();
  console.log("please fucking do something ffs");
  const response = await fetch('/newPost', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/newPost');
  } else {
    alert('Failed to reach new page');
  }
};

newPostButton.addEventListener('submit', makeNewPostHandler);

