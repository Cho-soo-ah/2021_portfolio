$(document).ready(function() {
    var ww=$(window).width();
    var wh=$(window).height();

    function layout(){
        
        if(ww>960){
        
        
        mask_w=$("#mask").width();
        
        $("#img_wrap").css({
            width: mask_w*5,
            height: mask_w
        });
        
       

        }
    };//layout end

    layout();


    $(window).resize(function(){

        ww=$(window).width();
        wh=$(window).height();
        layout();

    });

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });



}); //end







