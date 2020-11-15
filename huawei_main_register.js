define(["jquery"], function ($) {
  function register() {
    $(function () {
      $("#huawei_meny input").on("change", function (event) {
        var target = event.target;
        switch (target.className) {
          case "username":
            var u_name = /^[-_a-zA-Z0-9]{4,16}$/;
            if (u_name.test($(target).val())) {
              $(target).parent().css("border-color", "");
              $(target).next().html("");
            } else {
              $(target).parent().css("border-color", "");
              $(target).next().html("用户名格式错误,4-16数字,字母,下划线");
            }
            break;
          case "cell-phone":
            var u_phone = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
            if (!u_phone.test($(target).val())) {
              $(target).parent().css({
                border: "red 1px solid",
              });
              $(target).next().html("手机格式或错误");
            } else {
              $(target).parent().css({ border: "none" });
              $(target).next().html("");
            }
            break;
          case "password":
            var u_psw = /[\w]{6,16}/;
            if (u_psw.test($(target).val())) {
              $(target).parent().css("border-color", "");
              $(target).next().next().html("");
            } else {
              $(target).parent().css("border-color", "red 1px solid");
              $(target).next().html("密码应为6-16数字,字母,下划线");
            }
            break;
          case "psw-con":
            if ($(".psw-con").val() == $(".password").val()) {
              $(target).parent().css("border-color", "");
              $(target).next().html("");
            } else {
              $(target).parent().css("border-color", "red 1px solid");
              $(target).next().next().html("两次密码不一致");
            }
            break;
        }
      });
    });
    $("")
  }
  return {
    register,
  };
});
