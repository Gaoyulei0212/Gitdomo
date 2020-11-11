define(['jquery','jquery-cookie'], function($) {
    function productList(){
        $(function(){
            $.ajax({
                type:"get",
                url:"../data/data.json",
                success:function(arr){
                   var str = ``;
                   for(var i = 0;i<arr.length;i++){
                    str += `
                    <li id="${arr[i].id}">
                    <a href="#"  onclick="return false">
                      <p class="pic">
                        <img src="${arr[i].img}" alt="" />
                      </p>
                      <p class="title">${arr[i].title}</p>
                      <p class="price">
                        <span>￥ </span>
                        <span class="price-money">${arr[i].priceMoney}</span>
                        <span> 起</span>
                        <span> 多款可选</span>
                      </p>
                      <p class="lable">
                        <span>赠送积分</span>
                      </p>
                      <p class="evaluate">9999人评价 99%好评</p>
                      <p class="sale">新品上市</p>
                      <p class="add">
                       <span>
                         加入购物车
                       </span>
                      </p>
                    </a>
                    </li>
                    `
                    $(".sec-list .list-ul").html(str);
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
            })
        })
    }
    return{
        productList
    }
})