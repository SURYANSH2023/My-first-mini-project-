const menuOpenButton = document.getElementById('menu-open-button');
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuCloseButton = document.getElementById('menu-close-button');

menuOpenButton.addEventListener('click', () => {
//toggle mobile menu visibility
document.body.classList.toggle("show-mobile-menu");
});
//close menu when close button is clicked

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//close menu when nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});


//initialize  swiper //
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spacebetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   },  
   //responsive breakpoints
   breakpoints: {
0: {
    slidesPerView: 1
},
768: {
    slidesPerView: 2
   },
1024: {
   slidesPerView: 3
   }
}
});
