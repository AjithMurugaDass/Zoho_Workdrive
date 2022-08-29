
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" s8active", " ");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " s8active";
}


// const team1_list = document.getElementById("team1");
// const team2_list = document.getElementById("team2");
// const team3_list = document.getElementById("team3");

const featuresBtn = document.querySelectorAll(".features-btn");

const featImg1 = document.querySelector(".feat-img-1");
const featImg2 = document.querySelector(".feat-img-2");
const featImg3 = document.querySelector(".feat-img-3");

// console.log(featuresBtn);
for (let i = 0; i < featuresBtn.length; i++) {
  featuresBtn[i].addEventListener("click", () => {
    //img
    featImg1.classList.remove("feat-img-active");
    featImg2.classList.remove("feat-img-active");
    featImg3.classList.remove("feat-img-active");
    document
      .querySelector(`.feat-img-${i + 1}`)
      .classList.add("feat-img-active");
    //btn

    featuresBtn[0].classList.remove("features-btn-active");
    featuresBtn[1].classList.remove("features-btn-active");
    featuresBtn[2].classList.remove("features-btn-active");
    featuresBtn[i].classList.add("features-btn-active");
  });
}
// team1_list.addEventListener("click", () => {
//   img1.style.visibility = "visible";
//   img2.style.visibility = "hidden";
//   img3.style.visibility = "hidden";
//   team1_list.classList.add("active");
//   team2_list.classList.remove("active");

//   team3_list.classList.remove("active");
// });
// team2_list.addEventListener("click", () => {
//   img2.style.visibility = "visible";
//   img1.style.visibility = "hidden";
//   img3.style.visibility = "hidden";
//   team2_list.classList.add("active");
//   team1_list.classList.remove("active");

//   team3_list.classList.remove("active");
// });
// team3_list.addEventListener("click", () => {
//   img3.style.visibility = "visible";
//   img1.style.visibility = "hidden";
//   img2.style.visibility = "hidden";
//   team3_list.classList.add("active");
//   team1_list.classList.remove("active");
//   team2_list.classList.remove("active");
// });

let arr = [
  1.2, 1.4, 1.6, 1.8, 2.2, 2.4, 2.6, 2.8, 3.2, 3.4, 3.6, 3.8, 4.2, 4.4, 4.6,
  4.8,
];
for (let i = 0; i < arr.length; i++) {}
let i = 0;
let st;
function doStart() {
  if (arr.length == i) {
    clearInterval(st);
    document.getElementById("j").textContent = "4.5";
    document.getElementById("k").textContent = "4.5";
    document.getElementById("m").textContent = "4.4";
  } else {
    document.getElementById("i").textContent = arr[i];
    document.getElementById("j").textContent = arr[i];
    document.getElementById("k").textContent = arr[i];
    document.getElementById("l").textContent = arr[i];
    document.getElementById("m").textContent = arr[i];

    i++;
  }
}

st = setInterval(doStart, 140);
// clearInterval(st,10000);
let run = true;

// Sticky
const nav = document.querySelector(".nav");

let sticky = document.querySelector(".sticky");
window.addEventListener("scroll", () => {
   let scrollable = window.scrollY;
   // let scrolled = document.documentElement.scrollHeight;
   let s7_Sync = document.querySelector(".s7-sync");
  
   let rocket = document.querySelector("#rocket");
   let rocketStroke = document.querySelector(".svg-rocket");
  let star = document.querySelector("#s5-awards");
  let list1 = document.querySelector('.list');
   console.log(scrollable);
  let hidden = document.querySelector(".hidden");
  if (window.scrollY >= 0 && window.scrollY <= 150) {
    hidden.style.display = "none";
    
  } else {
    hidden.style.display = "block";
    if (scrollable >= 1600 && scrollable <= 2500) {
      rocket.style.display = "block";
      rocketStroke.style.display = "block";
      // Star Rating
    } else if (scrollable >= 3300 && scrollable <= 4300) {

      star.style.display = "block";

      console.log(star);

      doStart();
      
    } else if(scrollable>=4400 && scrollable < 5000){
      let displayList = document.querySelectorAll(".list1");
      // displayList.style.display = 'block';
      for (let i = 0; i < displayList.length; i++) {
        console.log(i);
        displayList[i].classList.add("inner-view");
      }
    }else if (scrollable >= 5100 && scrollable <=6000) {
      // console.log('hi');
      s7_Sync.style.display = 'block';
    }
    else {
      rocket.style.display = "none";
      rocketStroke.style.display = "none";
      star.style.display = "none";
      
      s7_Sync.style.display = "none";
       

    }
  }
});