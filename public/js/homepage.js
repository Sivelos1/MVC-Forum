const newPostButton = document.querySelector('.makeNewPost');

const makeNewPostHandler = async (event) => {
  event.preventDefault();
  
  document.location.replace('/newPost');
};

newPostButton.addEventListener('submit', makeNewPostHandler);

const postList = document.querySelectorAll('.posts');

postList.forEach(element => {
  element.addEventListener('click', function(event){
    event.preventDefault();
    const response = fetch('/api/post/'+element.id, function(){
      
    })
  })
});