const commentBox = document.querySelector('.comment-box');

const newCommentHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector('#post_id').textContent;
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
      alert('Failed to create comment');
    }
  }
};

commentBox.addEventListener('click', function(event){
  event.preventDefault();
  newCommentHandler(event);
});
