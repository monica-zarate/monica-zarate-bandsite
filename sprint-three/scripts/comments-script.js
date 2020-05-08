// API Key

// https://project-1-api.herokuapp.com/comments/?api_key=9ce4d922-8e4b-49c1-b904-b4cb606cff1a

//Comment Section

//Comments Content
let postAuthor;
let comments;
let date;

//Promise / Display Default Comments
let defaultComments = axios
  .get(
    "https://project-1-api.herokuapp.com/comments/?api_key=9ce4d922-8e4b-49c1-b904-b4cb606cff1a",
    {}
  )
  .then((response) => {
    for (let i = 0; i < response.data.length; i++) {
      postAuthor = response.data[i].name;
      comments = response.data[i].comment;
      date = response.data[i].timestamp;
    }
  })
  .catch((error) => {
    console.log(error);
  });

// function displayComment(commentObject) {
//   var post = document.createElement("div");
//   post.classList.add("post");
//   var comment = document.querySelector(".comment");
//   comment.appendChild(post);
//   var postImg = document.createElement("img");
//   postImg.classList.add("post__img");
//   post.appendChild(postImg);
//   postImg.src = "/assets/icons/PNG/usericon-grey.png";
//   var postText = document.createElement("div");
//   postText.classList.add("post__text");
//   post.appendChild(postText);
//   var postTextWrapper = document.createElement("div");
//   postTextWrapper.classList.add("post__text-wrapper");
//   postText.appendChild(postTextWrapper);
//   var postAuthor = document.createElement("h3");
//   postAuthor.classList.add("post__author");
//   postTextWrapper.appendChild(postAuthor);
//   postAuthor.innerText = commentObject.name;
//   var postDate = document.createElement("span");
//   postDate.classList.add("post__date");
//   postTextWrapper.appendChild(postDate);
//   postDate.innerText = commentObject.date;
//   var postContent = document.createElement("p");
//   postContent.classList.add("post__content");
//   postText.appendChild(postContent);
//   postContent.innerText = commentObject.comment;
// }

// for (var i = defaultComments.length - 1; i >= 0; i--) {
//   displayComment(defaultComments[i]);
// }

// function buttonHandler(event) {
//   event.preventDefault();

//   var name = document.querySelector(".comment__input-username");
//   var nameText = name.value;
//   var content = document.querySelector(".comment__comment-area");
//   var contentText = content.value;

//   var date =
//     new Date().getMonth() +
//     1 +
//     "/" +
//     new Date().getDate() +
//     "/" +
//     new Date().getFullYear();

//   var newComment = {
//     name: nameText,
//     date: date,
//     comment: contentText,
//   };
//   defaultComments.push(newComment);
//   clean();
//   for (var i = defaultComments.length - 1; i >= 0; i--) {
//     displayComment(defaultComments[i]);
//   }
//   content.value = "";
//   name.value = "";
// }

// function clean() {
//   var posts = document.querySelectorAll(".post");
//   for (var i = posts.length - 1; i >= 0; i--) {
//     posts[i].remove();
//   }
// }

// var button = document.querySelector(".comment__btn");
// button.addEventListener("click", buttonHandler);
