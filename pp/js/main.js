window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)








        
        










    });



    /*  slide,click event section */




    const swiper01 = new Swiper(".swiper-container", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false
        // },
        spaceBetween: 80,
        slidesPerView: '2.3',
        centeredSlides: true,
        speed:1000,
        parallax: true,
        direction:'horizontal',
        // navigation: {
        //     nextEl: ".cover_button_right",
        //     prevEl: ".cover_button_left",
        // },
        initialSlide: 0,
        watchOverflow:true,
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            type: "fraction",
        },

    });



})


