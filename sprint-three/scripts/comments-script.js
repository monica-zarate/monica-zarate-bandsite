// API Key

// https://project-1-api.herokuapp.com/comments/?api_key=9ce4d922-8e4b-49c1-b904-b4cb606cff1a

//Comment Section

//Comments Content
let postAuthor;
let comments;
let date;
let commentsAPI =
  "https://project-1-api.herokuapp.com/comments/?api_key=9ce4d922-8e4b-49c1-b904-b4cb606cff1a";

//Promise / Display Default Comments
displayComments = () => {
  let defaultComments = axios
    .get(commentsAPI, {})
    .then((response) => {
      let comment = document.querySelector(".comment");

      for (let i = response.data.length - 1; i >= 0; i--) {
        postAuthor = response.data[i].name;
        comments = response.data[i].comment;
        date = response.data[i].timestamp;
        let dateObject = new Date(date);
        let formattedDate =
          dateObject.getMonth() +
          1 +
          "/" +
          dateObject.getDate() +
          "/" +
          dateObject.getFullYear();
        let post = `<div class="post"><img class="post__img" src="/assets/icons/PNG/usericon-grey.png"/><div class="post__text"><div class="post__text-wrapper"><h3 class="post__author">${postAuthor}</h3><span class="post__date">${formattedDate}</span></div><p class="post__content">${comments}</p></div></div>`;
        comment.innerHTML = comment.innerHTML + post;
      }
      var button = document.querySelector(".comment__btn");
      button.addEventListener("click", buttonHandler);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Button Event Handler / Add new Comments

function buttonHandler(event) {
  event.preventDefault();

  var name = document.querySelector(".comment__input-username");
  var nameText = name.value;
  var content = document.querySelector(".comment__comment-area");
  var contentText = content.value;

  if (nameText !== "" && contentText !== "") {
    let newComment = {
      name: nameText,
      comment: contentText,
    };
    axios
      .post(commentsAPI, newComment)
      .then((result) => {
        clean();
        displayComments();
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    alert("Please provide your Name and Comment");
  }
}

// Function clean to not duplicate comments

function clean() {
  let posts = document.querySelectorAll(".post");
  for (var i = posts.length - 1; i >= 0; i--) {
    posts[i].remove();
  }
}

displayComments();
