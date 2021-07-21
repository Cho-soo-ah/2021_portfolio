$(document).ready(function(){

$("#menu").click(function(){
        $("#sub_menu").animate({
            top:0
        },1000);
        $("body").css({
            position: "fixed"
        });
    });
    
    $("#close_btn").click(function(){
        $("#sub_menu").animate({
            top: "-110vh"
        },1000);
        $("body").css({
            position:"relative"
        });
    });
    



});//end