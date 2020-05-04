//Shows Section

var defaultShows = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Fancisco, CA",
    ticketsBtn: "BUY TICKETS",
  },
  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Fancisco, CA",
    ticketsBtn: "BUY TICKETS",
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Fancisco, CA",
    ticketsBtn: "BUY TICKETS",
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Fancisco, CA",
    ticketsBtn: "BUY TICKETS",
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Fancisco, CA",
    ticketsBtn: "BUY TICKETS",
  },
  {
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Fancisco, CA",
    ticketsBtn: "BUY TICKETS",
  },
];
const dateText = "DATE";
const venueText = "VENUE";
const locationText = "LOCATION";

function displayShow(showObject) {
  var info = document.createElement("ul");
  info.classList.add("shows__info");
  var showsWrapper = document.querySelector(".shows__wrapper");
  showsWrapper.appendChild(info);
  var detailsMob = document.createElement("li");
  detailsMob.classList.add("shows__details--mob");
  info.appendChild(detailsMob);
  detailsMob.innerText = dateText;
  var detailsDate = document.createElement("li");
  detailsDate.classList.add("shows__details--date");
  info.appendChild(detailsDate);
  detailsDate.innerText = showObject.date;
  var detailsMobVenue = document.createElement("li");
  detailsMobVenue.classList.add("shows__details--mob");
  info.appendChild(detailsMobVenue);
  detailsMobVenue.innerText = venueText;
  var details = document.createElement("li");
  details.classList.add("shows__details");
  info.appendChild(details);
  details.innerText = showObject.venue;
  var detailsMobLocation = document.createElement("li");
  detailsMobLocation.classList.add("shows__details--mob");
  info.appendChild(detailsMobLocation);
  detailsMobLocation.innerText = locationText;
  var detailsLocation = document.createElement("li");
  detailsLocation.classList.add("shows__details");
  info.appendChild(detailsLocation);
  detailsLocation.innerText = showObject.location;
  var button = document.createElement("li");
  info.appendChild(button);
  var buttonStyle = document.createElement("button");
  buttonStyle.classList.add("shows__btn");
  button.appendChild(buttonStyle);
  buttonStyle.innerText = showObject.ticketsBtn;
}

for (var i = 0; i < defaultShows.length; i++) {
  displayShow(defaultShows[i]);
}
