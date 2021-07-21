$(document).ready(function(){
    
    var ww=$(window).width();
    var wh=$(window).height();
    
   
    
    $(window).scroll(function(){
        sct= $(window).scrollTop();
        
        if(sct>=wh){
            $("#box_1").css({
                top:"-100vh",
                position:"fixed"
            });
        }else{
            $("#box_1").css({
                top:0,
                position:"relative"
            });
        }
        
    });
   
    //--------------------------
    
    var i=0;
    
    $("#menu").stop().click(function(){ 
        
        if(i == 0){
            $("#in_menu").animate({
                top: 0
            },1000);
            i++;
        }else if(i == 1){
            $("#in_menu").animate({
                top:-1000
            },1000);
            i--;
        }
        
                
    });
    
    
    
    //-------------------------
    
    
    
    
    
});//end