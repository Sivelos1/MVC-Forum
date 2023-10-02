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
      await fetch('/', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      })
    } else {
      alert('Failed to create post');
    }
  }
};
const cancelHandler = async (event) => {
  event.preventDefault();

  document.location='/';
};

document
  .querySelector('#submit-button')
  .addEventListener('submit', newPostHandler);

document
.querySelector('#cancel-button')
.addEventListener('submit', cancelHandler);
