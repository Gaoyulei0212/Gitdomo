define(['jquery','jquery-cookie'], function($) {
    // 'use strict';
        // console.log(11111);
        function downloadData1(){
                $.ajax({
                    type:"get",
                    url:"../data/data3.json",
                    success:function(arr){
                        var str = ``;
                        for(var i = 0;i<arr.length;i++){
                                str += `
                              <li id="${arr[i].id}">
                                <a href="">
                                  <img src="${arr[i].img}" alt="" />
                                  <span class="nav-hide-introduce">${arr[i].title}</span>
                                  <span class="nav-hide-money">￥${arr[i].priceMoney}</span>
                                </a>
                              </li>
                                `
                                $(".nav-hide-as .nav-hide-as-img ul").eq(0).html(str);
                        }
                    },
                    error:function(msg){
                        console.log(msg);
                    }
                })
        };

        function downloadData2(){
            $.ajax({
                type:"get",
                url:"../data/data4.json",
                success:function(arr){
                    var str = ``;
                    for(var i = 0;i<arr.length;i++){
                            str += `
                          <li id="${arr[i].id}">
                            <a href="">
                              <img src="${arr[i].img}" alt="" />
                              <span class="nav-hide-introduce">${arr[i].title}</span>
                              <span class="nav-hide-money">￥${arr[i].priceMoney}</span>
                            </a>
                          </li>
                            `
                            $(".nav-hide-as .nav-hide-as-img ul").eq(1).html(str);
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
            })
        };

        function downloadData3(){
            $.ajax({
                type:"get",
                url:"../data/data1.json",
                success:function(arr){
                    var str = ``;
                    for(var i = 0;i<arr.length;i++){
                            str += `
                          <li id="${arr[i].id}">
                            <a href="">
                              <img src="${arr[i].img}" alt="" />
                              <span class="nav-hide-introduce">${arr[i].title}</span>
                              <span class="nav-hide-money">￥${arr[i].priceMoney}</span>
                            </a>
                          </li>
                            `
                            $(".nav-hide-as .nav-hide-as-img ul").eq(2).html(str);
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
        })
        };

        function downloadData4(){
            $.ajax({
                type:"get",
                url:"../data/data2.json",
                success:function(arr){
                    var str = ``;
                    for(var i = 0;i<arr.length;i++){
                            str += `
                          <li id="${arr[i].id}">
                            <a href="">
                              <img src="${arr[i].img}" alt="" />
                              <span class="nav-hide-introduce">${arr[i].title}</span>
                              <span class="nav-hide-money">￥${arr[i].priceMoney}</span>
                            </a>
                          </li>
                            `
                            $(".nav-hide-as .nav-hide-as-img ul").eq(3).html(str);
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
        })
        };

        function downloadData5(){
            $.ajax({
                type:"get",
                url:"../data/data6.json",
                success:function(arr){
                    var str = ``;
                    for(var i = 0;i<arr.length;i++){
                            str += `
                          <li id="${arr[i].id}">
                            <a href="">
                              <img src="${arr[i].img}" alt="" />
                              <span class="nav-hide-introduce">${arr[i].title}</span>
                              <span class="nav-hide-money">￥${arr[i].priceMoney}</span>
                            </a>
                          </li>
                            `
                            $(".nav-hide-as .nav-hide-as-img ul").eq(4).html(str);
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
        })
        };

        function navShow(){
            var navLis = $(".nav-list .nav-list-ul li")
            var navLis = $("#mian-nav .nav-list .nav-list-ul").find("li");
            var navHide = $(".nav-hide .nav-hide-as");
            
            navLis.mouseenter(function(){
              navLis.attr("class","")
              $(this).attr("class","navShow");
            })

            navHide.mouseenter(function(){
              navHide.css("display","none")
              .eq($(this).index())
              .css("display","block")
             }).mouseleave(function(){
              navHide.css("display","none")
              navLis.attr("class","");
             })

            navLis.mouseenter(function(){
                navHide.css("display","none")
                .eq($(this).index())
                .css("display","block")
            })
            
            $(".nav-list").mouseleave(function(){
                navLis.attr("class","");
                navHide.css("display","none")
            })

            
        };

        function fromHide(){
          $("[type='text']").focus(function(){
            $(".from-text").css("display","none")
          }).blur(function(){
            $(".from-text").css("display","block")
          })
        }

        // 翻转
        function rotateDraw(){
            var rotateCenter1 = document.querySelector(".contentBoard img:nth-of-type(1)");
            var rotateCenter2 = document.querySelector(".contentBoard img:nth-of-type(2)");
            var rotateAll1 = document.querySelectorAll(".board img:nth-of-type(1)")
            var rotateAll2 = document.querySelectorAll(".board img:nth-of-type(2)")
            
            rotateCenter1.onclick = function() {
              rotateCenter1.style.transform = "rotateY(180deg)";
              rotateCenter2.style.transform = "rotateY(0deg)";
               for(var i = 0 ;i < rotateAll1.length; i++){
                rotateAll1[i].style.transform = "rotateY(180deg)";
                rotateAll2[i].style.transform = "rotateY(0deg)";
              }
            }
            rotateCenter2.onclick = function() {
              rotateCenter2.style.transform = "rotateY(-180deg)";
              rotateCenter1.style.transform = "rotateY(0deg)";
              for(var i = 0;i < rotateAll2.length; i++){
              rotateAll2[i].style.transform = "rotateY(-180deg)";
              rotateAll1[i].style.transform = "rotateY(0deg)";
            }
            }

           
            // for(var i = 0 ;i < rotateAll2.length; i++){
            //  rotateAll2[i].onclick = function(){
            //   this.style.transform = "rotateY(-180deg)";
            //   rotateAll1[i].style.transform = "rotateY(0deg)";
            //   }
            // }
        }
    // 顶部导航栏信息
    var data1 = null;
    var data2 = null;
    var data3 = null;
    var data4 = null;
    var data5 = null;
    return{
        data1 : downloadData1,
        data2 : downloadData2,
        data3 : downloadData3,
        data4 : downloadData4,
        data5 : downloadData5,
        navShow,
        rotateDraw,
        fromHide
    }
});