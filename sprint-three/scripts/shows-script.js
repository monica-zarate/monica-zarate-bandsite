// API Key

// https://project-1-api.herokuapp.com/showdates/?api_key=9ce4d922-8e4b-49c1-b904-b4cb606cff1a

//Shows Section

let dateText;
let venueText;
let locationText;
const showsAPI =
  "https://project-1-api.herokuapp.com/showdates/?api_key=9ce4d922-8e4b-49c1-b904-b4cb606cff1a";

// Promise / Display Shows

let showDetails = axios
  .get(showsAPI, {})
  .then((response) => {
    let showsWrapper = document.querySelector(".shows__wrapper");

    for (let i = 0; i < response.data.length; i++) {
      dateText = response.data[i].date;
      venueText = response.data[i].place;
      locationText = response.data[i].location;
      let info = `<ul class="shows__info"><li class="shows__details--mob">DATE</li><li class="shows__details--date">${dateText}</li><li class="shows__details--mob">VENUE</li><li class="shows__details">${venueText}</li><li class="shows__details--mob">LOCATION</li><li class="shows__details">${locationText}</li><li><button class="shows__btn">BUY TICKETS</button></li></ul>`;
      showsWrapper.innerHTML = showsWrapper.innerHTML + info;
    }
  })
  .catch((error) => {
    console.log(error);
  });
