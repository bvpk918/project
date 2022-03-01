window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)




        // $(function () {
        //
        //     var target = $('.target');
        //     //1
        //     var zoom = target.data('zoom');
        //
        //     $(".wrap")
        //         .on('mousemove', magnify)
        //         .prepend("<div class='magnifier'></div>")
        //         .children('.magnifier').css({
        //         "background": "url('" + target.attr("src") + "') no-repeat",
        //         // 2
        //         "background-size": target.width() * zoom + "px " + target.height() * zoom+ "px"
        //     });
        //
        //     var magnifier = $('.magnifier');
        //
        //     function magnify(e) {
        //
        //         // 마우스 위치에서 .magnify의 위치를 차감해 컨테이너에 대한 마우스 좌표를 얻는다.
        //         var mouseX = e.pageX - $(this).offset().left;
        //         var mouseY = e.pageY - $(this).offset().top;
        //
        //         // 컨테이너 밖으로 마우스가 벗어나면 돋보기를 없앤다.
        //         if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
        //             magnifier.fadeIn(100);
        //         } else {
        //             magnifier.fadeOut(100);
        //         }
        //
        //         //돋보기가 존재할 때
        //         if (magnifier.is(":visible")) {
        //
        //             // 3
        //             var rx = -(mouseX * zoom - magnifier.width() /2 );
        //             var ry = -(mouseY * zoom - magnifier.height() /2 );
        //
        //             //돋보기를 마우스 위치에 따라 움직인다.
        //             //돋보기의 width, height 절반을 마우스 좌표에서 차감해 마우스와 돋보기 위치를 일치시킨다.
        //             var px = mouseX - magnifier.width() / 2;
        //             var py = mouseY - magnifier.height() / 2;
        //
        //             //적용
        //             magnifier.css({
        //                 left: px,
        //                 top: py,
        //                 backgroundPosition: rx + "px " + ry + "px"
        //             });
        //         }
        //     }
        // });








    });



    var swiper = new Swiper(".pic_list_box", {
        spaceBetween: 12,
        slidesPerView: 7,
        freeMode: false,
        direction: "vertical",
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });
    var swiper2 = new Swiper(".pic_big_box", {
        spaceBetween: 31,
        direction: "vertical",
        thumbs: {
            swiper: swiper,
        },
    });
    //
    // $(function() {
    //     const galleryThumbs = new Swiper(".pic_list_box", {
    //         centeredSlides: true,
    //         // centeredSlidesBounds: true,
    //         direction: "vertical",
    //         spaceBetween: 12,
    //         slidesPerView: 7,
    //         freeMode: false,
    //         watchSlidesVisibility: true,
    //         watchSlidesProgress: false,
    //         watchOverflow: false,
    //         navigation: {
    //             nextEl: ".swiper-button-next",
    //             prevEl: ".swiper-button-prev"
    //         },
    //         // breakpoints: {
    //         //     480: {
    //         //         direction: "vertical",
    //         //         slidesPerView: 7,
    //         //     }
    //         // }
    //
    //     });
    //
    //     const galleryTop = new Swiper(".pic_big_box", {
    //         direction: "vertial",
    //         spaceBetween: 0,
    //         thumbs: {
    //             swiper: galleryThumbs
    //         },
    //     });
    //     galleryTop.on('slideChangeTransitionStart', function() {
    //         galleryThumbs.slideTo(galleryTop.activeIndex);
    //     });
    //     galleryThumbs.on('transitionStart', function() {
    //         galleryTop.slideTo(galleryThumbs.activeIndex);
    //     });
    // });




    gsap.to('.fix-this-3', {
        scrollTrigger: {
            trigger: ".trigger-this-3",
            start: "top top",
            // end: () => "+=" + 300,
            end: '100% 100%',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });


    var swiper04 = new Swiper('.recommend_container', {
        // pagination: {
        //     el: ".slide_bar_outer",
        //     type: "progressbar",
        // },
        slidesPerView: 1,
        spaceBetween: 0,
        // scrollbar: {
        //     el: '.slide_bar_outer',
        //     draggable : true,
        //     dragSize: 345,
        // },
        navigation: {
            nextEl: ".recommend_next",
            prevEl: ".recommend_prev",
        },


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

})




//
//
// var swiper = new Swiper(".mySwiper", {
//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//     loop: true,
//     spaceBetween: 10,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     thumbs: {
//         swiper: swiper,
//     },
// });


