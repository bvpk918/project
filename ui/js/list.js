window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)



    });


    gsap.to('.fix-this-3', {
        scrollTrigger: {
            trigger: ".trigger-this-3",
            start: "70px top",
            // end: () => "+=" + 300,
            end: '120% 100%',
            pin: true,
            pinSpacing: false,
            scrub: true,
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






    $('#list_outbox .small_ctgr_box .menu_title').click(function(){

        $(this).siblings('.menu_list').slideToggle();
 


    });


})