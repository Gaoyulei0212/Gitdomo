// 购物车代码
define(["jquery", "jquery-cookie"], function ($) {
  function shopping() {
    $(function () {
      sc_num();
      // 数据
      function sc_num() {
        // $("#main .commodity-data").empty();
        $.ajax({
          type: "get",
          url: "../data/data.json",
          success: function (arr) {
            var cookieStr = $.cookie("goods");
            var newArr = [];
            if (cookieStr) {
              var cookieArr = JSON.parse(cookieStr);
              for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < cookieArr.length; j++) {
                  if (arr[i].id == cookieArr[j].id) {
                    // 把数据添加上去
                    arr[i].num = cookieArr[j].num;
                    newArr.push(arr[i]);
                    break;
                  }
                }
              }
              var sum = 0;
              for (var i = 0; i < newArr.length; i++) {
                sum += parseInt(newArr[i].priceMoney * newArr[i].num);
              }
              $(".foo-right .money").html(sum);
            }
            // 将找到的数据在购物车中加载戳来
            for (var i = 0; i < newArr.length; i++) {
              var node = $(
                `<li id="${newArr[i].id}">
                                <p class="check">
                                    <input type="checkbox" name="xuan" class="readonly" />
                                </p>
                                <p class="pic">
                                    <img src="${newArr[i].img}" alt="" />
                                </p>
                                <article class="title">
                                    <p class="introduce">
                                    ${newArr[i].title}
                                    </p>
                                    <p class="dese">
                                    ${newArr[i].dese}
                                    </p>
                                    <p class="sale">${newArr[i].sale}</p>
                                </article>
                                <p class="unit"priceMoney"">
                                    <em>￥</em>
                                <span> ${newArr[i].priceMoney} </span>
                                </p>
                                <p class="stock-btn">
                                    <a href="javascript:" class="decrease">-</a>
                                    <span class="btn-num">${
                                      newArr[i].num
                                    }</span>
                                    <a href="javascript:" class="add">+</a>
                                </p>
                                <p class="subtotal">￥<em>${
                                  newArr[i].num * newArr[i].priceMoney
                                }</em></p>
                                <p class="del">删除</p>
                            </li> `
              );
              node.appendTo($("#main .commodity-data"));
            }
          },
          error: function (msg) {
            console.log(msg);
          },
        });
      }

      // 全部事件
      $("#shopping").on({
        click: function (event) {
          totalprice();
          var target = event.target;
          switch (target.className) {
            case "choice1":
              if ($(target).prop("checked") == true) {
                $("input[type=checkbox]").prop("checked", true);
              } else {
                $("input[type=checkbox]").prop("checked", false);
              }
              var cookieArr = JSON.parse($.cookie("goods"));
              // for (var i = 0; i < $("input[type=checkbox]").length; i++) {
              //   if ($("input[type=checkbox]") == cookieArr.length) {
              //     $("#choice1"), $("#choice2").prop("checked") == true;
              //   }
              // }
              break;
            case "choice2":
              checked();
              break;
            case "del-choice":
              var id = target.parentNode.parentNode.id;
              var cookieArr = JSON.parse($.cookie("goods"));
              var index = cookieArr.findIndex((item) => item.id == id);
              var lisArr = Array.from($("#main .commodity-data li .readonly"));
              var num = 0;
              for (var i = 0; i < lisArr.length; i++) {
                if (lisArr[i].checked) {
                  lisArr[i].parentNode.parentNode.remove();
                  cookieArr.forEach(function (value, index) {
                    if (value.id == lisArr[i].parentNode.parentNode.id) {
                      cookieArr.splice(index, 1);
                      var newobj = JSON.stringify(cookieArr);
                      cookieArr.length === 0
                        ? $.cookie("goods", null)
                        : $.cookie("goods", JSON.stringify(newobj), {
                            expires: 7,
                          });
                    }
                  });
                  num++;
                }
              }
              if (num == 0) {
                alert("请选择您要删除的商品");
              }
              $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7,
              });
              totalprice();
              break;
            case "add":
              var id = target.parentNode.parentNode.id;
              var cookieArr = JSON.parse($.cookie("goods"));
              var index = cookieArr.findIndex((item) => item.id == id);
              $(target)
                .prev()
                .html(parseInt($(target).prev().html()) + 1);
              $(target)
                .parent()
                .next()
                .html(
                  `￥<em>${
                    $(target).prev().html() *
                    $(target).parent().prev().find("span").html()
                  }</em>`
                );
              cookieArr[index].num = $(target).prev().html();
              $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7,
              });
              totalprice();
              break;
            case "decrease":
              var id = target.parentNode.parentNode.id;
              var cookieArr = JSON.parse($.cookie("goods"));
              var index = cookieArr.findIndex((item) => item.id == id);
              if (cookieArr[index].num == 1) {
                if (confirm("您确定要删除此件商品吗？")) {
                  $(target).closest("li").remove().attr("id");
                  cookieArr.splice(index, 1);
                  cookieArr.length === 0
                    ? $.cookie("goods", null)
                    : $.cookie("goods", JSON.stringify(cookieArr), {
                        expires: 7,
                      });
                }
                totalprice();
              } else {
                $(target)
                  .next()
                  .html(parseInt($(target).next().html()) - 1);
                $(target)
                  .parent()
                  .next()
                  .html(
                    `￥<em>${
                      $(target).next().html() *
                      $(target).parent().prev().find("span").html()
                    }</em>`
                  );
                cookieArr[index].num = $(target).next().html();
                $.cookie("goods", JSON.stringify(cookieArr), {
                  expires: 7,
                });
                totalprice();
                return false;
              }

              break;
            case "del":
              // 在页面上删除这个节点
              var id = $(target).closest("li").remove().attr("id");
              var cookieArr = JSON.parse($.cookie("goods"));
              var index = cookieArr.findIndex((item) => item.id == id);
              cookieArr.splice(index, 1);
              // 判断cookie值是不是为空 为空直接删除cookie
              cookieArr.length === 0
                ? $.cookie("goods", null)
                : $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7,
                  });
              totalprice();
              break;
            case "readonly":
              ckall();
              // var num = 0;
              // var checkall = document.getElementsByClassName("readonly");
              // var c1 = document.getElementById("#choice2");
              // var d1 = document.getElementById("#choice1");
              // console.log(checkall);
              // for (var i = 0; i < checkall.length; i++) {
              //   if (checkall.checked == true) {
              //     num++;
              //   }
              // }
              // console.log(num);
              // ckall();
              break;
            case "mo-dal":
              alert(`请支付 ${$(".money").html()}元`);
              break;
          }
        },
      });
      // 全选框
      function checked() {
        if ($(".choice2").prop("checked") == true) {
          $("input[type=checkbox]").prop("checked", true);
        } else {
          $("input[type=checkbox]").prop("checked", false);
        }
      }
      // 反选
      function ckall() {
        var num = 0;
        for (var i = 0; i < $(".readonly").length; i++) {
          if ($(".readonly")[i].checked) {
            num++;
          }
        }
        if (num == $(".readonly").length) {
          $("#choice2").prop("checked", "true");
          $("#choice1").prop("checked", "true");
        } else {
          $("#choice2").prop("checked", "");
          $("#choice1").prop("checked", "");
        }
      }
      // 总价
      function totalprice() {
        var n1 = 0;
        var sumUp = Array.from(
          $("#main .commodity-data li p:nth-of-type(5) em")
        );
        // for (var i = 0; i < sumUp.length; i++) {
        //   n1 += sumUp[i].innerHTML;
        // }
        sumUp.forEach((arr) => {
          n1 += parseInt(arr.innerHTML);
        });
        $("#footer .foo-right span i").html(`${n1}`);
      }

      // 备用
      // 给加减添加点击事件
      // $("#main .commodity-data").on("click", ".stock-btn a", function () {
      //   if (this.innerHTML == "+") {
      //     sc_num();
      //     var id = $(this).closest("li").attr("id");
      //     // 找到这个id cookie数据
      //     var cookieArr = JSON.parse($.cookie("goods"));
      //     var index = cookieArr.findIndex((item) => item.id == id);
      //     cookieArr[index].num++;
      //     $(this).siblings(".btn-num").html(cookieArr[index].num);
      //     // 单价
      //     var unit = $(this).parent().prev().find("span").html();
      //     // 数量
      //     var num = $(this).siblings(".btn-num").html();
      //     // 小计
      //     var sub = unit * num;
      //     $(this).parent().next().html(`￥<em>${sub}</em>`);
      //   } else {
      //     sc_num();
      //     var id = $(this).closest("li").attr("id");
      //     // 找到这个id cookie数据
      //     var cookieArr = JSON.parse($.cookie("goods"));
      //     var index = cookieArr.findIndex((item) => item.id == id);
      //     if (cookieArr[index].num == 1) {
      //       if (confirm("您确定要删除此件商品吗？")) {
      //         $(this).closest("li").remove().attr("id");
      //         cookieArr.splice(index, 1);
      //         cookieArr.length === 0
      //           ? $.cookie("goods", null)
      //           : $.cookie("goods", JSON.stringify(cookieArr), {
      //               expires: 7,
      //             });
      //       } else {
      //         return false;
      //       }
      //     } else {
      //       cookieArr[index].num--;
      //       $(this).siblings(".btn-num").html(cookieArr[index].num);
      //       // 单价
      //       var unit = $(this).parent().prev().find("span").html();
      //       // 数量
      //       var num = $(this).siblings(".btn-num").html();
      //       // 小计
      //       var sub = unit * num;
      //       $(this).parent().next().html(`￥<em>${sub}</em>`);
      //     }
      //   }
      //   // 页面显示的数量
      //   $.cookie("goods", JSON.stringify(cookieArr), {
      //     expires: 7,
      //   });
      //   console.log();
      //   return false;
      // });
    });
  }

  return {
    shopping,
  };
});
