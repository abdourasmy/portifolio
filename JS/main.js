let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  document.documentElement.style.setProperty("--option", mainColors);
}

// Start loader
let body = document.querySelector("body");

window.addEventListener("load", function () {
  setTimeout(function () {
    body.classList.add("loaded");
  }, 100);
});
// End loader
// Start Header
$(".bars").click(function () {
  $("header .container ul").toggleClass("toggle");
});
$(".sun").click(function () {
  $("body").toggleClass("body");
  if ($("body").hasClass("body")) {
    document.documentElement.style.setProperty("--theme-color", "white");
    $(".fa-moon").toggle();
    $(".mm").toggle();
  } else {
    $(".fa-moon").toggle();
    $(".mm").toggle();
    document.documentElement.style.setProperty("--theme-color", "black");
  }
});
// End Header
/* Start Typing */
var words = ["Abdullah Rasmy.", "Front-End Developer.", "A Web Developer."],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 200;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};
$(document).ready(function () {
  wordflick();
});
/* End Typing */
// Start Option Color
let optionColor = document.querySelector(".option-color i");
let ul = document.querySelector(".option-color ul");

optionColor.onclick = function () {
  ul.classList.toggle("open");
};
const colorsLi = document.querySelectorAll(".option-color ul li");

// Loop On All List Items
colorsLi.forEach((li) => {
  // Click On Every List Items
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--option",
      e.target.dataset.color
    );

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);
  });
});
// End Option Color
/* Start Skills */
let span = document.querySelectorAll(".progress span");
let skills = document.querySelector(".skills");

window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop - 450) {
    span.forEach(e => {
      e.style.width = e.attributes[0].nodeValue
    })
  }
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu-2");
toggle.onclick = function () {
  menu.classList.toggle("activee");
};

let myData = document.getElementById("myData")
let data = new Date()

myData.innerHTML = data.getFullYear()