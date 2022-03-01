window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)



        if( scrollTop >= 0 ){
            $('#section03').addClass('on');
        }

        if( scrollTop >= 450 ){
            $('.about_video').addClass('on');
        }

        if( scrollTop >= 550 ){
            $('.intro_udr_box').addClass('on');
        }

        if( scrollTop >= 1100 ){
            $('.about_main_title').addClass('on');
        }

        if( scrollTop >= 1450 ){
            $('.about_main_desc .main_01').addClass('on');
        }
        if( scrollTop >= 2250 ){
            $('.about_main_desc .main_02').addClass('on');
        }

        if( scrollTop >= 3100 ){
            $('.outro_box').addClass('on');
        }






        
        










    });




})


