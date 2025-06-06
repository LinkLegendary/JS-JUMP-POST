

const postListEL = document.querySelector('.post-list');

const id = localStorage.getItem("id")

async function onSearchChange(event){
    const id = event.target.value;
    renderposts(id);

    // const posts =  await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    // const postsData = await posts.json();

    // postListEL.innerHTML = postsData.map(post => postHTML(post)).join('');
 
}


async function renderposts(id) {
    
    const posts =  await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postsData = await posts.json();
   

postListEL.innerHTML = postsData.map(post => postHTML(post)).join('');
    

}
      
    renderposts(id);


function postHTML(post) {
  return   `<div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`
    
}


