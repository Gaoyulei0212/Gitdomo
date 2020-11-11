define(['jquery','jquery-cookie'], function($) {
    function login(){
        $(function(){
            var timer = null;
            var qrImg = $("#huawei-main .main-left .left-img");
            
            clearInterval("timer")
            
            timer = setInterval(function(){
               qrImg.css('opacity','0.3')
               $(".left-hint").css("display","flex")
            },5000)
            
            $(".left-hint").find("button").click(function(){
                $(".left-hint").css("display","none");
                qrImg.css('opacity','1')

                setInterval(function(){
                    qrImg.css('opacity','0.3')
                    $(".left-hint").css("display","flex")
                 },5000)
            })
            $(".main-right form").on("click","input",function(){
                $(this).css("border","1px solid #007dff")
            }).on("blur","input",function(){
                $(this).css("border","1px solid #f7f7f7")
            })
            
            var flag = true;
            var psw = $("[placeholder='密码']")
            $(".main-right .eyeimg").click(function(){
                if(flag){
                flag = false
                $(this).html(`<img src="./images/ia_100000003.png" alt="" />`)
                psw[0].type = "text";
                }else{
                flag = true;
                $(this).html(`<img src="./images/ia_100000012473.png" alt="" />`)
                psw[0].type = "password";
            }
            })

            $(".right-list a").hover(function(){
                if($(this).attr("class")=="qq"){
                    $(this).css("background","#506A7E")
                }
                if($(this).attr("class")=="alipay"){
                    $(this).css("background","#00AAEF")
                }
                if($(this).attr("class")=="microblog"){
                    $(this).css("background","#47CC47")
                }
            },function(){
                $(this).css("background","")
            })
        })
     }
     return{
         login
     }
})