$(document).ready(function () {

    $("#open_logo>p").eq(0).animate({
        opacity:1
    },1500);
    $("#open_logo>p").eq(1).delay(1200).animate({
        opacity:1
    },1500);
    $("#open_logo>p").eq(2).delay(800).animate({
        opacity:1
    },1500);
    $("#open_logo>p").eq(3).delay(300).animate({
        opacity:1
    },1500);
    $("#open_logo>p").eq(4).delay(1700).animate({
        opacity:1
    },1500);
    $("#open_logo>p").eq(5).delay(3800).animate({
        opacity:1
    },1500);
    $("#open_logo>p").eq(6).delay(3000).animate({
        opacity:1
    },1500);
    $("#open_logo>p").eq(7).delay(2000).animate({
        opacity:1
    },1500);
    $("#open_logo>p").eq(8).delay(2200).animate({
        opacity:1
    },1500);
    
    $("#open_top").delay(5000).animate({
        opacity:0
    },800,function(){
        $("#open").css({
            display: "none"
        });
    });

    
    //------------------//

    $("#top_btn").stop().click(function () {
        $("#in_menu").animate({
            top: 0
        },1000);
        $("#line").delay(1000).animate({
            height:"70vh"
        },800);
        $("#menu_left").delay(2000).animate({
            width:"35vw",
            opacity:1
        },800,function(){
            $("#menu_right").animate({
                width:"20vh",
                opacity:1
            },800);
        });
        $("body").css({
            position: "fixed"
        });
    });
    
    $("#close_btn").click(function(){
        $("#in_menu").animate({
            top: "-100vh"
        },1000);
        $("body").css({
            position: "relative"
        });
    });
    
    
    $("#in_menu a").mouseenter(function(){
        $(this).css({
            color:"#f9c730"
        });
    });
    $("#in_menu a").mouseleave(function(){
        $(this).css({
            color:"white"
        });
    });
    
    $("#top_btn").mouseenter(function(){
        $("#menu_logo").stop().animate({
            opacity:1
        },500);
    });
    $("#top_btn").mouseleave(function(){
        $("#menu_logo").stop().animate({
            opacity:0
        },500);
    });
    


    $("#bot_btn").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 1000);
    });

    //----------------------------------//

    $("#in_wrap_2").click(function(){
        $("#con_box_4").delay(3000).fadeOut();
        $("#con_box_3").delay(6000).fadeOut();
        $("#con_box_2").delay(9000).fadeOut();
        $(".con_box").delay(12000).fadeIn();
    });
    
    setInterval(function(){
        $("#in_wrap_2").trigger("click")
    });
    
    //----------------------------------//
    
    
    var i=0;
    var cw=$(".albem").width();
    
    
    $("#right_btn").click(function(){
        i++;
        if(i==1){
            $(".albem").css({
                transform: "scale(1)"
            });
            $("#move_wrap").delay(1500).animate({
                left:-cw
            },1500,function(){
                $("#albem_3").css({
                    transform: "scale(1.5)"
                });
            });    
        }
        if(i==2){
            $(".albem").css({
                transform: "scale(1)"
            });
            $("#move_wrap").delay(1500).animate({
                left:-cw*2
            },1500,function(){
                $("#albem_4").css({
                    transform: "scale(1.5)"
                });
            });    
        }
        if(i==3){
            $(".albem").css({
                transform: "scale(1)"
            });
            $("#move_wrap").delay(1500).animate({
                left:-cw*3
            },1500,function(){
                $("#albem_5").css({
                    transform: "scale(1.5)"
                });
            });    
        }
        if(i==4){
            i=-1
            $(".albem").css({
                transform: "scale(1)"
            });
            $("#move_wrap").delay(1500).animate({
                left:cw
            },1500,function(){
                $("#albem_1").css({
                    transform:"scale(1.5)"
                });
            });    
        }
        if(i==0){
            $(".albem").css({
                transform: "scale(1)"
            });
            $("#move_wrap").delay(1500).animate({
                left:0
            },1500,function(){
                $("#albem_2").css({
                    transform: "scale(1.5)"
                });
            });    
        }
        
    });
    
    setInterval(function(){
        $("#right_btn").trigger("click");
    },1500);
    
    //----------------------------------//

    
    $("section").on("mousewheel",function(e){
        var moveTop=0;
        e.preventDefault();
        if(e.originalEvent.wheelDelta<0){
            if($(this).next() != undefined){
                moveTop= $(this).next().offset().top;
                $("html,body").stop().animate({
                    scrollTop: moveTop
                },700);
            }
        }else if(e.originalEvent.wheelDelta>0){
            if($(this).prev() != undefined){
                moveTop= $(this).prev().offset().top;
                $("html,body").stop().animate({
                    scrollTop: moveTop
                },700);
            }
        }
    });
    
    //------------------------------------------//
    

    
    $("#in_wrap_4").click(function(){
        $("#con_4_2").delay(5000).fadeOut();
        $("#con_4_2").delay(10000).fadeIn();
    });
    
    setInterval(function(){
        $("#in_wrap_4").trigger("click")
    });
    

    
    //-----------------------------------//
    
    $("#sns_1").mouseenter(function(){
        $(this).css({
            backgroundColor:"#6f6f6f"
        });
        $("#sns_1>p").css({
            color:"#e3e3e3"
        });
    });
    $("#sns_2").mouseenter(function(){
        $(this).css({
            backgroundColor:"#6f6f6f"
        });
        $("#sns_2>p").css({
            color:"#e3e3e3"
        });
    });
    
    $("#sns_3").mouseenter(function(){
        $(this).css({
            backgroundColor:"#6f6f6f"
        });
        $("#sns_3>p").css({
            color:"#e3e3e3"
        });
    });
    $("#sns_4").mouseenter(function(){
        $(this).css({
            backgroundColor:"#6f6f6f"
        });
        $("#sns_4>p").css({
            color:"#e3e3e3"
        });
    });
    
    
    
    $(".sns_box").mouseleave(function(){
        $(this).css({
            backgroundColor:"#e3e3e3"
        });
        $(".sns_box>p").css({
            color:"#6f6f6f"
        });
    });

}) //end
