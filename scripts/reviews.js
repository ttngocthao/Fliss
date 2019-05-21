const reviewsXhr = new XMLHttpRequest();
const testimonialsList = document.getElementById("testimonials-list");
reviewsXhr.open("GET", "./api/testimonialsData.json", true);
reviewsXhr.responseType = "text";

reviewsXhr.onload = function() {
  if (reviewsXhr.status === 200) {
    var reviewData = JSON.parse(reviewsXhr.responseText);
    // console.log(reviewData);
    for (let i = 0; i < reviewData.length; i++) {
      // console.log(reviewData[i]);
      testimonialsList.innerHTML += reviewTemp(reviewData[i]);
    }
  } else {
    console.log("Error", reviewsXhr.statusText);
  }
};
reviewsXhr.send();

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
