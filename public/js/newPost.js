const newPostButton = document.querySelector('#submit-button');
const cancelButton = document.querySelector('#cancel-button');

const newPostHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (title && content) {
    const response = await fetch('/api/post/newPost', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("please")
      document.location.replace('/');
    } else {
      alert('Failed to create post');
    }
  }
};
const cancelHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/');
};

newPostButton.addEventListener('click', function(event){
  event.preventDefault();
  newPostHandler(event);
});

cancelButton.addEventListener('click', function(event){
  event.preventDefault();
  cancelHandler(event);
});
