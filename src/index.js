function updatePosts(data) {
  let titleName = " ";
  data.forEach((item) => {
    titleName += `<div class="card">
    <div class="title"> ${item.title}</div>
    <div class="body">${item.body}</div> 
    </div>
    <br>`;
  });
  document.getElementById("title").innerHTML = titleName;
}

function updateComments(data) {
  let commentName = " ";
  data.forEach((item) => {
    commentName += `<div class="comment-card">
        <div class="name">  <b> ${item.name} </b></div><div class="comment-body">${item.body} </div>        
    </div><br> `;
  });
  document.getElementById("comment").innerHTML = commentName;
}

fetch(`https://jsonplaceholder.typicode.com/comments`)
  .then((response) => response.json())
  .then((data) => updateComments(data));

fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((response) => response.json())
  .then((data) => updatePosts(data));
