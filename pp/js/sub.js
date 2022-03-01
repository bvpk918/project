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
        spaceBetween: 0,
        slidesPerView: '2.3',
        centeredSlides: true,
        speed:1000,
        parallax: true,
        direction:'horizontal',
        // navigation: {
        //     nextEl: ".cover_button_right",
        //     prevEl: ".cover_button_left",
        // },
        initialSlide: 1,
        watchOverflow:true,
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            type: "fraction",
        },

    });



    //
    //
    // $('.swiper-slide .title').mouseenter(function () {
    //
    //     //
    //     // $('.n_item_hover > div').removeClass('on');
    //
    //     $(this).addClass('on');
    //
    //
    //     if($(this).hasClass('on')){
    //
    //         $(this).prev().css('opacity',`1`);
    //         $(this).css('transform','translateX(-30px)');
    //
    //
    //     }
    //
    //     if($(this).hasClass('bag')){
    //
    //         $(this).prev().css('transform',`translateX(-43px)`);
    //         $(this).css('transform','translateX(30px)');
    //
    //
    //     }
    //
    //
    // }).mouseleave(function () {
    //     $('.n_item_hover > div').removeClass('on');
    //
    //     $('.bag').prev().css('transform',`translateX(0%)`);
    //
    //     $('.like').next().css('transform',`translateX(0%)`);
    //
    //
    //
    //
    // })



})


