// 详情页的JS
define(['jquery','jquery-cookie'], function($) {
    
    function startMove(){
        $(function(){
            $("#nav").find(".nav-last-li").hover(function(){
                $(".nav-hide-ul").eq(0).css({
                    "display":"flex",
                })
            },function(){
                $(".nav-hide-ul").eq(0).css({
                    "display":"none",
                })
            })
        
            $(".nav-right").find(".nav-phone").hover(function(){
                $(".nav-hide-sec").eq(0).css({
                    "display":"flex",
                })
            },function(){
                $(".nav-hide-sec").eq(0).css({
                    "display":"none",
                })
            })
        
            // 切换图片
            var speed = 0;
                speed = Math.max(speed,"-210")
                speed = Math.min(speed,"0")
            $("#main .small-list").on("click",".btn-left,.btn-right",function(){
                // console.log($(this));
                if($(this).attr("class") == "btn-left"){
                    speed = Math.max(speed,"-140")
                    speed = Math.min(speed,"0")
                    if( $(".items-list .img-list").css("left") == "0px"){
                        return false;
                    }else{
                        $(".items-list .img-list").css("left",speed + "px")
                        speed += 70
                    }
                }
                if($(this).attr("class") == "btn-right"){
                    speed = Math.max(speed,"-140")
                    speed = Math.min(speed,"0")
                    speed -= 70
                    $(".items-list .img-list").css("left",speed + "px")
                }
            })
            // 阻止a标签的默认行为
            $("#main .items-list .img-list").on("click","li",function(){ 
                return false;
            })
            // 滑入时显示当前显示的图片
            $("#main .items-list .img-list").on("mouseenter","li",function(){
                    let index = $(this).index();
                    switch(index){
                        case 0 :
                             $(".main-left-img .com-img").html(`<a class="com-img"><img src="./images/ia_100000086.png" alt="" /></a>`)
                             $(".mian-center-img").html(`<img src="../images/ia_200006026.png" alt="" />`)
                             break;
                        case 1 :
                            $(".main-left-img .com-img").html(`<a class="com-img"><img src="./images/ia_100014124.png" alt="" /></a>`)
                            $(".mian-center-img").html(`<img src="../images/ia_200006029.png" alt="" />`)
                            break;
                        case 2 :
                            $(".main-left-img .com-img").html(`<a class="com-img"><img src="./images/ia_100000000719.png" alt="" /></a>`)
                            $(".mian-center-img").html(`<img src="../images/ia_100004502.png" alt="" />`)
                            break;
                        case 3 :
                            $(".main-left-img .com-img").html(`<a class="com-img"><img src="./images/ia_100004502.png" alt="" /></a>`)
                            $(".mian-center-img").html(`<img src="../images/ia_300002706.png" alt="" />`)
                                break;
                        case 4 :
                            $(".main-left-img .com-img").html(`<a class="com-img"><img src="./images/ia_100004508.png" alt="" /></a>`)
                            $(".mian-center-img").html(`<img src="../images/ia_300001040.png" alt="" />`)
                                break;
                         case 5 :
                            $(".main-left-img .com-img").html(`<a class="com-img"><img src="./images/ia_100000002220.png" alt="" /></a>`)
                            $(".mian-center-img").html(`<img src="../images/ia_300001060.png" alt="" />`)
                                break;
                         case 6 :
                            $(".main-left-img .com-img").html(`<a class="com-img"><img src="./images/ia_100000002223.png" alt="" /></a>`)
                            $(".mian-center-img").html(`<img src="../images/ia_300002626.png" alt="" />`)
                                break;
                        case 7 :
                            $(".main-left-img .com-img").html(`<a class="com-img"><img src="./images/ia_200000086.png" alt="" /></a>`)
                            $(".mian-center-img").html(`<img src="../images/ia_300002606.png" alt="" />`)
                                break;
                    }
                
            })
            
            // 放大镜效果
            $(".main-left-img ").mousemove(function(e){
               $(".mian-center-img").css("display","block")
               $(".samll-div").css("display","block")
               
               var X = e.pageX - $(this).offset().left - $(".samll-div").width()/2;
                   X = Math.max(X,0)
                   X = Math.min(X,225)
               var Y = e.pageY - $(this).offset().top - $(".samll-div").height()/2;
                   Y = Math.max(Y,0)
                   Y = Math.min(Y,225)

               $(".samll-div").css({
                   left : X + "px",
                   top  : Y + "px"
               })
               $(".mian-center-img img").css({
                left :-2 * X + "px",
                top  :-2 * Y + "px"
               })
            }).mouseleave(function(){
                $(".mian-center-img").css("display","none")
               $(".samll-div").css("display","none")
            })
        });

            
    }
    return{
        startMove,
    }
})
