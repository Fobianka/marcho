$(function () {

  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.shop__filter-btn').on('click', function (){
    $('.shop__filters').slideToggle();
  });

  $('.footer-top__title-dropdown').on('click',function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer-top__list--active');
  });


  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="10"><path d="M.015 4.97a.745.745 0 01.178-.49L3.934.2a.548.548 0 01.863 0 .762.762 0 010 .98L1.486 4.97l3.31 3.79a.776.776 0 010 .99.56.56 0 01-.862 0L.193 5.47a.772.772 0 01-.178-.5zm0 0" fill-rule="evenodd"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="10"><path d="M5 4.99a.816.816 0 00-.17-.5L1.06.2a.556.556 0 00-.87 0 .771.771 0 000 .99l3.33 3.8-3.33 3.8a.771.771 0 000 .99.568.568 0 00.87 0l3.77-4.3A.715.715 0 005 4.99zm0 0" fill-rule="evenodd"/></svg></button>',
    infinite: false,
  });


  $('.oneproduct-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.oneproduct-tabs__top-item').removeClass('oneproduct-tabs__top-item--active');
    $(this).addClass('oneproduct-tabs__top-item--active');

    $('.oneproduct-tabs__content-item').removeClass('oneproduct-tabs__content-item--active');
    $($(this).attr('href')).addClass('oneproduct-tabs__content-item--active');
  });


  $('.oneproduct-slide__thumb').slick({
    asNavFor: '.oneproduct-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.oneproduct-slide__big').slick({
    asNavFor: '.oneproduct-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1051,
        settings: {
          autoplay: true,
          draggable: true
        }
      },
    ]
  });

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function() {
    $('.product-item').addClass('product-item--list');
    $('.shop-content__inner').addClass('shop-content__nogrid');
  });

  $('.button-grid').on('click', function() {
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content__nogrid');
  });
  
  $('.select-style, .oneproduct-item__num').styler();
  
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
  

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2L316.9 18z"/></svg>',
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);


  
  

});