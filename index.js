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
