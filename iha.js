new Swiper('.container-wrapper', {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
   el: '.swiper-pagination',
   clickable: true,
   dynamicBullets: true
},
  
    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

breakpoints: {
  0: {
    slidesPerView: 1
  },
  768: {
    slidesPerView: 2
  },
  1024: {
    slidesPerView: 3
  },
}
});


window.onload = function() { 

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;
}

/* THIS IS FOR DONATE POPUP */
setTimeout(() => {
  document.querySelector(".displaytoggler").style.display = "block";
  document.querySelector(".displaytoggler").style.opacity = "1";
}, 9200);

document.addEventListener("click", e => {
  if (e.target.matches(".stop")) {
    document.querySelector(".displaytoggler").style.display = "none";
}
})
/* THE END */


/* THIS IS FOR APPLICATION POPUP */
document.addEventListener("click", e => {
  if (e.target.matches(".mentorshippopupbtn")) {
    document.querySelector(".displayApplications").style.display = "block";
}
})

document.addEventListener("click", e => {
  if (e.target.matches(".closeDiv")) {
    document.querySelector(".displayApplications").style.display = "none";
}
})
/* THE END */


/* THIS IS FOR MENU SLIDE */
// document.addEventListener("click", e => {
//    if (e.target.matches(".close")){
//     document.querySelector('body').classList.toggle("activeSlide") 
// }
// })
/* THE END */
