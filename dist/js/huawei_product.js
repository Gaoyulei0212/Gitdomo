// 商品列表
define(["jquery", "jquery-cookie"], function ($) {
  function productList() {
    $(function () {
      $.ajax({
        type: "get",
        url: "../data/data.json",
        success: function (arr) {
          var str = ``;
          for (var i = 0; i < arr.length; i++) {
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
                    `;
            $(".sec-list .list-ul").html(str);
          }
        },
        error: function (msg) {
          console.log(msg);
        },
      });
    });

    $("#search .sec-list .list-ul").on("click", ".add", function () {
      var id = $(this).parent().parent().attr("id");
      var first = $.cookie("goods") === null ? true : false;

      if (first) {
        // 如果是第一次添加 则创建
        var cookieArr = [{ id: id, num: 1 }];
        $.cookie("goods", JSON.stringify(cookieArr), {
          expires: 7,
        });
      } else {
        // 查找之前是否添加过
        var cookieArr = JSON.parse($.cookie("goods"));
        // 假设没有添加过
        var same = false;
        for (var i = 0; i < cookieArr.length; i++) {
          if (cookieArr[i].id == id) {
            same = true;
            break;
          }
        }
        if (same) {
          // 数量 +1
          cookieArr[i].num++;
        } else {
          // 没添加过
          let obj = { id: id, num: 1 };
          cookieArr.push(obj);
        }
        // 存回cookie
        $.cookie("goods", JSON.stringify(cookieArr), {
          expires: 7,
        });
      }
      alert("商品添加成功");
    });
  }
  return {
    productList,
  };
});
