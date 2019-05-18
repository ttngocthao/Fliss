const xhr = new XMLHttpRequest();
const eventList = document.getElementById("event-list");
xhr.open("GET", "./api/eventsData.json", true);
xhr.responseType = "text";
xhr.onload = function() {
  if (xhr.status === 200) {
    var eventData = JSON.parse(xhr.responseText);
    // console.log(eventData);
    for (let i = 0; i < eventData.length; i++) {
      // console.log(eventData[i]);
      if (eventList !== null) {
        eventList.innerHTML += eventTemp(eventData[i]);
      }
    }
  } else {
    console.log("Error", xhr.statusText);
  }
};
xhr.send();

const eventTemp = obj => {
  return `
  <div class="event-container">
  <ul class="event-date">
    <li>${obj.eventDate}</li>
    <li>${obj.eventMonth}</li>
  </ul>
  <h2 class="event-name">
    ${obj.eventName}
  </h2>
  <i class="event-read-btn fas fa-caret-up"></i>
  <div class="event-detail">
    <div>
      ${obj.eventInfo}
    </div>
  </div>
</div>
  `;
};
$(document).ready(() => {
  $(".event-read-btn").on("click", function() {
    $(this)
      .next(".event-detail")
      .toggleClass("expand");
    $(this).toggleClass("rotate");
  });
});
