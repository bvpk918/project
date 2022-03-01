window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)




    });
    //
    // const swiper = new Swiper('#sc01_right_top_slider', {
    //     effect: 'coverflow',
    //     coverflowEffect: {
    //         rotate: 30,
    //         slideShadows: false,
    //     },
    // });

    const swiper = new Swiper('#sc01_right_top_slider', {
        effect: 'fade',
        // direction: 'vertical',
        // fadeEffect: {
            // crossFade: true
        // },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        speed:2000,
        spaceBetween:2000,


        on : {
            slideChangeTransitionStart : function (e) {
                // console.log(this.realIndex);



            },
            slideChangeTransitionEnd : function (e) {
                //
                // var currentSlide = $(e);
                // console.log(this.realIndex);




            }
        },


    });

})


