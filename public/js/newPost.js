console.log("are you slapping")

const newPostHandler = async (event) => {
  event.preventDefault();
  alert('AAAAAAAAAAAAA');
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

document.querySelector('#submit-button').addEventListener('submit', function(event){
  event.preventDefault();
  newPostHandler(event);
});

document.querySelector('#cancel-button').addEventListener('submit', function(event){
  event.preventDefault();
  cancelHandler(event);
});
