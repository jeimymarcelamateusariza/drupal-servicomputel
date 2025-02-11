const swiper = new Swiper('.swiper-baner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-baner-pagination',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  
  });
  var swipergrid = new Swiper(".swiper-channels", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-channels-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { // Para móviles (0px en adelante)
        slidesPerView:  2,
      },
      768: { // Para tablets
        slidesPerView: 5,
      } 
    }
  });
  