//Comment Section

var defaultComments = [
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favorite ever!",
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wich I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Micheal Lyons",
    date: "12/18/2018",
    comment:
      "The BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
];

function displayComment(commentObject) {
  var post = document.createElement("div");
  post.classList.add("post");
  var comment = document.querySelector(".comment");
  comment.appendChild(post);
  var postImg = document.createElement("img");
  postImg.classList.add("post__img");
  post.appendChild(postImg);
  postImg.src = "/assets/icons/PNG/usericon-grey.png";
  var postText = document.createElement("div");
  postText.classList.add("post__text");
  post.appendChild(postText);
  var postTextWrapper = document.createElement("div");
  postTextWrapper.classList.add("post__text-wrapper");
  postText.appendChild(postTextWrapper);
  var postAuthor = document.createElement("h3");
  postAuthor.classList.add("post__author");
  postTextWrapper.appendChild(postAuthor);
  postAuthor.innerText = commentObject.name;
  var postDate = document.createElement("span");
  postDate.classList.add("post__date");
  postTextWrapper.appendChild(postDate);
  postDate.innerText = commentObject.date;
  var postContent = document.createElement("p");
  postContent.classList.add("post__content");
  postText.appendChild(postContent);
  postContent.innerText = commentObject.comment;
}

for (var i = defaultComments.length - 1; i >= 0; i--) {
  displayComment(defaultComments[i]);
}

function buttonHandler(event) {
  event.preventDefault();

  var name = document.querySelector(".comment__input-username");
  var nameText = name.value;
  var content = document.querySelector(".comment__comment-area");
  var contentText = content.value;

  var date =
    new Date().getMonth() +
    1 +
    "/" +
    new Date().getDate() +
    "/" +
    new Date().getFullYear();

  var newComment = {
    name: nameText,
    date: date,
    comment: contentText,
  };
  defaultComments.push(newComment);
  clean();
  for (var i = defaultComments.length - 1; i >= 0; i--) {
    displayComment(defaultComments[i]);
  }
  content.value = "";
  name.value = "";
}

function clean() {
  var posts = document.querySelectorAll(".post");
  for (var i = posts.length - 1; i >= 0; i--) {
    posts[i].remove();
  }
}

var button = document.querySelector(".comment__btn");
button.addEventListener("click", buttonHandler);
