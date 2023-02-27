let bars = document.querySelector(".bars");

let unorderedList2 = document.querySelector(".unordered-list2");

let isToggle = false;

// adding clicked event to hambuger menu

bars.addEventListener("click", () => {
  if (!isToggle) {
    unorderedList2.style.left = "0";
    isToggle = true;
  } else {
    unorderedList2.style.left = "-1000px";
    isToggle = false;
  }
});

unorderedList2.addEventListener("click", () => {
  unorderedList2.style.left = "-1000px";
  isToggle = false;
});

// Swipper js
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
