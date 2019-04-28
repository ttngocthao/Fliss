const xhr = new XMLHttpRequest();
const testimonialsList = document.getElementById("testimonials-list");
xhr.open("GET", "./api/testimonialsData.json", true);
xhr.responseType = "text";

xhr.onload = function() {
  if (xhr.status === 200) {
    var reviewData = JSON.parse(xhr.responseText);
    // console.log(reviewData);
    for (let i = 0; i < reviewData.length; i++) {
      // console.log(reviewData[i]);
      testimonialsList.innerHTML += reviewTemp(reviewData[i]);
    }
  } else {
    console.log("Error", xhr.statusText);
  }
};
xhr.send();

//template for each review
const reviewTemp = obj => {
  return `
        <div class='review-wrapper'>
            <div class='reviewer-info'>                
                <figure class='reviewer-img'>
                    <img src='${obj.profileImgUrl}'>
                </figure>
                <h2 class='reviewer-name'>${obj.name}</h2>
            </div>
            <div class='review-msg'>${obj.review}</div>
        </div>
    `;
};
