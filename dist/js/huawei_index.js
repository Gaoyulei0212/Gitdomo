define(['jquery','jquery-cookie'], function($) {
    // 'use strict';
    function downloadData1(){
        $.ajax({
            type:"get",
            url:"../data/data1.json",
            success:function(arr){
                var str = ``;
                for(var i = 0;i<arr.length;i++){
                        str += `
                            <li id="${arr[i].id}">
                                <a href="">
                                <p class="pic">
                                    <img src="${arr[i].img}" alt="" />
                                </p>
                                <p class="title">${arr[i].title}</p>
                                <p class="desc">${arr[i].dese}</p>
                                <p class="price">
                                <span>￥ </span>
                                <span class="price-money">${arr[i].priceMoney}</span>
                                <span> 起</span>
                                </p>
                                <p class="sale">${arr[i].sale}</p>
                                </a>
                            </li>
                        `
                        $("#shop-hot1 ul").html(str);
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
            url:"../data/data2.json",
            success:function(arr){
                var str = ``;
                for(var i = 0;i<arr.length;i++){
                        str += `
                            <li id="${arr[i].id}">
                                <a href="">
                                <p class="pic">
                                    <img src="${arr[i].img}" alt="" />
                                </p>
                                <p class="title">${arr[i].title}</p>
                                <p class="desc">${arr[i].dese}</p>
                                <p class="price">
                                <span>￥ </span>
                                <span class="price-money">${arr[i].priceMoney}</span>
                                <span> 起</span>
                                </p>
                                <p class="sale">${arr[i].sale}</p>
                                </a>
                            </li>
                        `
                        $("#shop-hot2 .hot2-list").html(str);
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
            url:"../data/data3.json",
            success:function(arr){
                var str = ``;
                for(var i = 0;i<arr.length;i++){
                        str += `
                            <li id="${arr[i].id}">
                                <a href="">
                                <p class="pic">
                                    <img src="${arr[i].img}" alt="" />
                                </p>
                                <p class="title">${arr[i].title}</p>
                                <p class="desc">${arr[i].dese}</p>
                                <p class="price">
                                <span>￥ </span>
                                <span class="price-money">${arr[i].priceMoney}</span>
                                <span> 起</span>
                                </p>
                                <p class="sale">${arr[i].sale}</p>
                                </a>
                            </li>
                        `
                        $("#shop-hot3 .hot3-list").html(str);
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }

    function downloadData4(){
        $.ajax({
            type:"get",
            url:"../data/data4.json",
            success:function(arr){
                var str = ``;
                for(var i = 0;i<arr.length;i++){
                        str += `
                            <li id="${arr[i].id}">
                                <a href="">
                                <p class="pic">
                                    <img src="${arr[i].img}" alt="" />
                                </p>
                                <p class="title">${arr[i].title}</p>
                                <p class="desc">${arr[i].dese}</p>
                                <p class="price">
                                <span>￥ </span>
                                <span class="price-money">${arr[i].priceMoney}</span>
                                <span> 起</span>
                                </p>
                                <p class="sale">${arr[i].sale}</p>
                                </a>
                            </li>
                        `
                        $("#shop-hot4 .hot4-list").html(str);
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }

    function downloadData5(){
        $.ajax({
            type:"get",
            url:"../data/data5.json",
            success:function(arr){
                var str = ``;
                for(var i = 0;i<arr.length;i++){
                        str += `
                            <li id="${arr[i].id}">
                                <a href="">
                                <p class="pic">
                                    <img src="${arr[i].img}" alt="" />
                                </p>
                                <p class="title">${arr[i].title}</p>
                                <p class="desc">${arr[i].dese}</p>
                                <p class="price">
                                <span>￥ </span>
                                <span class="price-money">${arr[i].priceMoney}</span>
                                <span> 起</span>
                                </p>
                                <p class="sale">${arr[i].sale}</p>
                                </a>
                            </li>
                        `
                        $("#shop-hot5 .hot5-list").html(str);
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }

    function downloadData6(){
        $.ajax({
            type:"get",
            url:"../data/data6.json",
            success:function(arr){
                var str = ``;
                for(var i = 0;i<arr.length;i++){
                    str += `
                    <li id="${arr[i].id}">
                    <a href="">
                      <p class="pic">
                        <img src="${arr[i].img}" alt="" />
                      </p>
                      <p class="title">${arr[i].title}</p>
                      <p class="desc">${arr[i].dese}</p>
                      <p class="price">
                        <span>￥ </span>
                        <span class="price-money">${arr[i].priceMoney}</span>
                        <span> 起</span>
                      </p>
                    </a>
                  </li>
                    `
                    $("#shop-hot6 .hot6-list").html(str);
            }
            }
        })
    }

    var data1 = null;
    var data2  = null;
    var data3  = null;
    var data4  = null;
    var data5  = null;
    var data6  = null;
    return{
        data1 :downloadData1,
        data2 :downloadData2,
        data3 :downloadData3,
        data4 :downloadData4,
        data5 :downloadData5,
        data6 :downloadData6
    }
});

