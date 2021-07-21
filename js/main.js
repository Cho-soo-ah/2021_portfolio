$(document).ready(function() {
    
    $(".nav_list:nth-child(1)").click(function(){
        $(".nav_list").removeClass("active");
        $(this).addClass("active");
        $(".txt_content").removeClass("active");
        $(".txt_content:nth-child(1)").addClass("active");
        $(".right_img").removeClass("active");
        $(".right_img:nth-child(1)").addClass("active");
    });
    $(".nav_list:nth-child(2)").click(function(){
        $(".nav_list").removeClass("active");
        $(this).addClass("active");
        $(".txt_content").removeClass("active");
        $(".txt_content:nth-child(2)").addClass("active");
        $(".right_img").removeClass("active");
        $(".right_img:nth-child(2)").addClass("active");
    });
    $(".nav_list:nth-child(3)").click(function(){
        $(".nav_list").removeClass("active");
        $(this).addClass("active");
        $(".txt_content").removeClass("active");
        $(".txt_content:nth-child(3)").addClass("active");
        $(".right_img").removeClass("active");
        $(".right_img:nth-child(3)").addClass("active");
    });
    $(".nav_list:nth-child(4)").click(function(){
        $(".nav_list").removeClass("active");
        $(this).addClass("active");
        $(".txt_content").removeClass("active");
        $(".txt_content:nth-child(4)").addClass("active");
        $(".right_img").removeClass("active");
        $(".right_img:nth-child(4)").addClass("active");
    });

    $(".btn_mofa").click(function(){
        $(".han_img").css("display","none");
        $(".mofa").css("display","block");        
    });
    $(".btn_kakao").click(function(){
        $(".han_img").css("display","none");
        $(".kakao").css("display","block");
    });
})

