$(".work-slider").slick({
  prevArrow:
    '<button type="button" class="slick-prev slick-btn b-0 pa"><img src="./images/vectors/arrow-left.svg" alt="arrow"></button>',
  nextArrow:
    '<button type="button" class="slick-next slick-btn b-0 pa"><img src="./images/vectors/arrow-right.svg" alt="arrow"></button>',
});
$(".about-us-slider").slick({
  prevArrow:
    '<button type="button" class="slick-prev slick-btn b-0 pa"><img src="./images/vectors/arrow-left.svg" alt="arrow"></button>',
  nextArrow:
    '<button type="button" class="slick-next slick-btn b-0 pa"><img src="./images/vectors/arrow-right.svg" alt="arrow"></button>',
});
$(".team-slider").slick({
  arrows: false,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
  ],
});
$(".reviews-slider").slick({
  dots: true,
  prevArrow:
    '<button type="button" class="slick-prev slick-btn b-0 pa"><img src="./images/vectors/arrow-left.svg" alt="arrow"></button>',
  nextArrow:
    '<button type="button" class="slick-next slick-btn b-0 pa"><img src="./images/vectors/arrow-right.svg" alt="arrow"></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
      },
    },
  ],
});

let navMenu = document.querySelector("#nav-header");
let btnMenu = document.querySelector("#menu-burger");

btnMenu.onclick = function () {
  navMenu.classList.toggle("d-opasity");
};
