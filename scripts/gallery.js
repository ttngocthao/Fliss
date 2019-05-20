// var xhr = new XMLHttpRequest();
// //const galleryWrapper = document.getElementById("gallery-wrapper");
// const artGallery = document.getElementById("art-gallery");
// const boxingGallery = document.getElementById("boxing-gallery");
// const dramaGallery = document.getElementById("drama-gallery");
// const singingGallery = document.getElementById("singing-gallery");
// const sportGallery = document.getElementById("sport-gallery");
// const danceGallery = document.getElementById("dance-gallery");

// xhr.open("GET", "./api/imgData.json", true);
// xhr.responseType = "text";

// xhr.onload = function() {
//   if (xhr.status === 200) {
//     var imgDb = JSON.parse(xhr.responseText);
//     //console.log(imgDb);

//     for (let i = 0; i < imgDb.length; i++) {
//       switch (imgDb[i].albumName) {
//         case "artDesign":
//           if (artGallery !== null) {
//             artGallery.innerHTML += albumTemp(imgDb[i]);
//           }
//           break;
//         case "boxing":
//           if (boxingGallery !== null) {
//             boxingGallery.innerHTML += albumTemp(imgDb[i]);
//           }
//           break;
//         case "drama":
//           if (dramaGallery !== null) {
//             dramaGallery.innerHTML += albumTemp(imgDb[i]);
//           }
//           break;
//         case "singing":
//           if (singingGallery !== null) {
//             singingGallery.innerHTML += albumTemp(imgDb[i]);
//           }
//           break;
//         case "sport":
//           if (sportGallery !== null) {
//             sportGallery.innerHTML += albumTemp(imgDb[i]);
//           }
//           break;
//         case "streetDancing":
//           if (danceGallery !== null) {
//             danceGallery.innerHTML += albumTemp(imgDb[i]);
//           }
//           break;
//         default:
//           console.log("Loading photos...");
//       }

//       //galleryWrapper.innerHTML += albumTemp(imgDb[i]);
//     }
//   } else {
//     console.log("Error", xhr.statusText);
//   }
// };
// xhr.send();

// //render each album to each page
// const renderGallery = namePage => {};
// //album template
// const albumTemp = obj => {
//   return `
// <section class='album-container'>

//   <ul class='photo-wrapper'>
//     ${obj.photoUrls.map(url => photoTemp(url)).join("")}
//   </ul>
// </section>`;
// };

// const modalBox = imgUrl => {
//   return `<div class='modalBox'>
//     <div class='closeBtn'>&times;</div>
//     <div class='modalBox-content'>
//       <img src='${imgUrl}'>
//     </div>
//   </div>`;
// };

// const photoTemp = photo => {
//   return `<li class='viewImg' key='${photo}' style='background-image: url(${photo})'></li>`;
// };

// $(document).ready(() => {
//   $("li.viewImg").on("click", function() {
//     const imgUrl = $(this).attr("key");
//     $("#view-individual").html(modalBox(imgUrl));
//     $(".modalBox").css("display", "block");
//     // alert($(this).data());
//     console.log($(this).attr("key"));
//     $(".closeBtn").on("click", () => {
//       // alert("close btn is clicked");
//       $(".modalBox").css("display", "none");
//     });
//   });
// });
