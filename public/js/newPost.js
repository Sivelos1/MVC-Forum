const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (title && content) {
    // TODO: Add a comment describing the functionality of this expression
    const response = await fetch('/api/post/newPost', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
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

document
  .querySelector('#submit-button')
  .addEventListener('submit', newPostHandler);

document
.querySelector('.#cancel-button')
.addEventListener('submit', cancelHandler);
