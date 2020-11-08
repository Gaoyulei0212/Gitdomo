// 轮播图 及 回到顶部
define(['jquery',], function($) {
    // 'use strict';
    // 轮播图
    function slideshow(){
        $(function(){
            var aBtns = $("#banner").find(".banner-buttom li");
            var oUl = $("#banner").find(".banner-images");
            var iNow = 0;
            var timer = null;
            //轮播
            timer = setInterval(function () {
                iNow++;
                tab();
            }, 4000);

            // 点击Li哪个就给哪个添加Class样式
            aBtns.mouseenter(function(){
                iNow = $(this).index();
                tab();
                clearInterval(timer)
            }).mouseleave(function(){
                timer = setInterval(function(){
                    iNow++;
                    tab();
                },4000);
            })
            // aBtns.mouseenter(function(){
            //     iNow = $(this).index();
            //     oUl.css({
            //         left : iNow * '1920px',
            //     })
            //     $(this)
            //     tab();
            // })

            // 滑入Ul时 停止   离开时 运动继续
            $(".banner-images").mouseenter(function(){
                clearInterval(timer);
            }).mouseleave(function(){
                timer = setInterval(function(){
                    iNow++;
                    tab();
                },4000);
            })
            // 轮播图
            function tab(){
                if(iNow == aBtns.size()){
                    aBtns.eq(0).addClass("ol-active");
                }
                aBtns.removeClass("ol-active").eq(iNow).addClass("ol-active");
                if(iNow == aBtns.size()){
                    aBtns.eq(0).addClass("ol-active");
                };
                oUl.stop(true).animate({
                    left:iNow * -1920,
                },function(){
                    if(iNow === aBtns.size()){
                        // aBtns.eq(iNow).addClass("ol-active");
                        iNow = 0;
                        oUl.css({
                            left : "0",
                        });
                    };
                });
            };
        });
    };

    // 固定菜单
    function fixedMenu(){
        $(window).scroll(function(){
            if($(window).scrollTop() >= $("#flex-nav").offset().top){
                $("#flex-nav").css({
                    position: 'fixed', 
                    top : 0,
                    left: 0
                })
            }
            
            if($(window).scrollTop() < 670){
                $("#flex-nav").css({
                    position: 'relative', 
                    left: -62 + 'px'
                })
            }
        })
    }

    // 回到顶部
    function goTop(){
        $("#backtop .backtopBtn").click(function () {
            $(window).scrollTop(0);
          });
    }
    
    return {
        slideshow,
        fixedMenu,
        goTop,
      };
});