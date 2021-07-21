$(document).ready(function(){
    
   
    $(".box").eq(0).mouseenter(function(){
        $(".in_box").eq(0).css({
            display:"block"
        });
        $(".in_box").eq(0).stop().animate({
            opacity:1
        },300);
    });
    $(".box").eq(1).mouseenter(function(){
        $(".in_box").eq(1).css({
            display:"block"
        });
        $(".in_box").eq(1).stop().animate({
            opacity:1
        },300);
    });
    $(".box").eq(2).mouseenter(function(){
        $(".in_box").eq(2).css({
            display:"block"
        });
        $(".in_box").eq(2).stop().animate({
            opacity:1
        },300);
    });
    $(".box").eq(3).mouseenter(function(){
        $(".in_box").eq(3).css({
            display:"block"
        });
        $(".in_box").eq(3).stop().animate({
            opacity:1
        },300);
    });
    
    
    $(".box").mouseleave(function(){
        $(".in_box").stop().animate({
            opacity:0
        },500);
    });
    
  
// ----------------------------------
    

        var i=0;
    
    $('#right_btn_5').click(function(){
        i++;
        if(i>3){
            i=0;
        };
        txt_move();
        right_move();
        mobile_move();
    });
    $("#left_btn_5").click(function(){
        i--;
        if(i<0){
            i=3;
        };
        txt_move();
        right_move();
        mobile_move();
    });
    
    var t=$(".txt_con").width();
    var rw=$(".right_con").width();
    
    function txt_move(){
        $("#txt_wrap").stop().delay(800).animate({
            left: -t*i
        },800);
    };

    function right_move(){
        $("#right_5").css({
            transform:"scale(1)"
        });
        $("#right_wrap").stop().delay(800).animate({
            left: -rw*i
        },800,function(){
            $("#right_5").stop().delay(800).css({
                transform:"scale(1.3)"
            });
        });

    };
    
    var mobile=$(".mo_img").width();
    
    function mobile_move(){
        $("#mobile_wrap").stop().animate({
            left: -mobile*i
        },800);
    };
    

    setInterval(function(){
         $('#right_btn_5').trigger("click");
    },4000);
   
    
 
    
    
    
    
});//end







