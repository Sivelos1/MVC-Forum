const commentBox = document.querySelector('.comment-box');

console.log(location.href);

const newCommentHandler = async (event) => {
  event.preventDefault();

  const id = 1;
  const content = document.querySelector('#comment-content').value.trim();

  if (id && content) {
    const response = await fetch('/api/post/newComment/'+id, {
      method: 'POST',
      body: JSON.stringify({ 
        content: content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create post');
    }
  }
};

commentBox.addEventListener('click', function(event){
  event.preventDefault();
  newCommentHandler(event);
});
