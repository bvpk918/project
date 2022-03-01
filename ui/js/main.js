window.addEventListener('DOMContentLoaded', function () {

    let cardList = 0;


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)



        if( scrollTop >= 50 ){
            $('#new_item').addClass('on');
        }

        if( scrollTop >= 320 ){
            $('.new_item_list').addClass('on');
        }


        if( scrollTop >= 1000 ){
            $('.best_item_title').addClass('on');
        }
        //
        // if( scrollTop >= 1200){
        //     $('.trigger-this-3').addClass('on')
        // }

        if( scrollTop >= 1170 ){
            $('.best_01').addClass('on');
        }
        if( scrollTop >= 1810 ){
            $('.best_02').addClass('on');
        }
        if( scrollTop >= 2450 ){
            $('.best_03').addClass('on');
        }
        if( scrollTop >= 3080 ){
            $('.best_04').addClass('on');
        }
        if( scrollTop >= 3715 ){
            $('.best_05').addClass('on');
        }
        if( scrollTop >= 4355 ){
            $('.best_06').addClass('on');
        }



        if( scrollTop >= 5450 ){
            $('.category_title').addClass('on');
        }

        if( scrollTop >= 5700 ){
            $('.category_box').addClass('on');
        }





        if( scrollTop >= 6900 ){
            $('.sns_title').addClass('on');
        }

        if( scrollTop >= 6990 ){
            $('#sc06_sns_slider').addClass('on');
        }




        if( scrollTop >= 7735 ){
            $('.startPoint').addClass('invert');
        }

        if( scrollTop >= 500 ){
            $('.startPoint').addClass('on');
        }





        
        










    });




    $('.n_item_hover > div').mouseenter(function () {


        $('.n_item_hover > div').removeClass('on');

        $(this).addClass('on');


        if($(this).hasClass('like')){

            $(this).next().css('transform',`translateX(43px)`);
            $(this).css('transform','translateX(-30px)');


        }

        if($(this).hasClass('bag')){

            $(this).prev().css('transform',`translateX(-43px)`);
            $(this).css('transform','translateX(30px)');


        }


    }).mouseleave(function () {
        $('.n_item_hover > div').removeClass('on');

        $('.bag').prev().css('transform',`translateX(0%)`);

        $('.like').next().css('transform',`translateX(0%)`);




    })




    /*  slide,click event section */

    const swiper01 = new Swiper("#sc01_left_slider", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        speed:1000,
        parallax: true,
        // direction:'vertical',
        navigation: {
            nextEl: ".cover_button_right",
            prevEl: ".cover_button_left",
        },

        loop: true,


        on : {
            slideChangeTransitionStart : function (e) {
                // console.log(this.realIndex);

                $('#sc01_right_top_slider .wrapper > div').removeClass('on');
                $('#sc01_right_top_slider .wrapper > div').eq(this.realIndex).addClass('on');


                cardList = this.realIndex;

                $('.pagination .numbers > div').removeClass('on');
                $('.pagination .numbers > div').eq(this.realIndex).addClass('on');

                $('.pagination .numbers > div').click(function(){
                    var index = $(this).index();
                    swiper01.slideTo(index + 1);
                    swiper03.slideTo(index + 1);
                });

                $('.play').click(function(){
                    swiper01.autoplay.start();
                    swiper03.autoplay.start();
                    return false;
                });

                let isClicked = true;
                $('.pause').click(function(){

                      
                    
                    if(isClicked){
                        swiper01.autoplay.stop();
                        swiper03.autoplay.stop();
                        $('.pause').html('▶︎');

                        $('.progress .bar').css('animation-play-state','paused');
                
                        
                        
                    }else{
                        swiper01.autoplay.start();
                        swiper03.autoplay.start();
                        $('.pause').html('II');
                        $('.pagination .numbers > div').removeClass('on');
                        $('.progress .bar').css('animation-play-state','running');

                        setTimeout(() => {
                            $('.pagination .numbers > div').eq(cardList).addClass('on');
                        }, 100);
                 
                    }
                    

                    isClicked = !isClicked;
                    

                });


            },
            slideChangeTransitionEnd : function (e) {

                // var currentSlide = $(e.);
                // console.log(this.realIndex);



            }
        },




    });

    //
    //
    // $('.each_number').click(function(){
    //     var index = $(this).index();
    //     swiper01.slideTo(index + 1);
    // });




    const swiper03 = new Swiper("#sc01_right_bottom_slider", {
        autoplay: {
            delay: 5000,
             disableOnInteraction: false
        },
        speed: 1000,
        parallax: true,
        direction: 'vertical',
        navigation: {
            nextEl: ".cover_button_right",
            prevEl: ".cover_button_left",
        },
        loop: true
    });




    //
    // var swiper01 = new Swiper("#sc01_right_bottom_slider", {
    //     grabCursor: true,
    //     effect: "creative",
    //     direction: 'vertical',
    //     creativeEffect: {
    //         prev: {
    //             shadow: true,
    //             translate: [0, "-10%", -1],
    //         },
    //         next: {
    //             translate: [0, "100%", 0],
    //         },
    //     },
    // });

    //
    // var swiper02 = new Swiper("#sc01_right_top_slider", {
    //     grabCursor: true,
    //     effect: "creative",
    //     direction: 'vertical',
    //     creativeEffect: {
    //         prev: {
    //             shadow: true,
    //             translate: [0, "0%", -1],
    //         },
    //         next: {
    //             translate: [0, "100%", 0],
    //         },
    //     },
    // });



    // var swiper03 = new Swiper("#sc02_new_item_slider", {
    //     grabCursor: true,
    //     effect: "creative",
    //     direction: 'horizontal',
    //     creativeEffect: {
    //         prev: {
    //             shadow: true,
    //             translate: [0, "-10%", -1],
    //         },
    //         next: {
    //             translate: [0, "100%", 0],
    //         },
    //     },
    // });

    var swiper04 = new Swiper("#sc02_new_item_slider", {
        // pagination: {
        //     el: ".slide_bar_outer",
        //     type: "progressbar",
        // },
        slidesPerView: 4,
        spaceBetween: 12,
        scrollbar: {
            el: '.slide_bar_outer',
            draggable : true,
            dragSize: 345,
        },
        navigation: {
            nextEl: ".button_right",
            prevEl: ".button_left",
        },
    });

    var swiper05 = new Swiper("#sc06_sns_slider", {
        slidesPerView: 6.8,
        spaceBetween: 70,
        // autoplay : {
        //     delay : 0,
        // },
        // speed : 5000,
        // loop: auto,



    });




    gsap.to('.fix-this-3', {
        scrollTrigger: {
            trigger: ".trigger-this-3",
            start: "top top",
            // end: () => "+=" + 300,
            end: '93.5% 100%',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });


    //
    // $(".bag").prev().css({"transform": "translateX(-43px)"});

})


