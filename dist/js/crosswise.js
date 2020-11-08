define([
    'require',
    'jquery'
], function(require,$) {
    // 'use strict';
    // 左右轮播
    
    // function crosswise(){
    //     // $("#shop-hot6").on("click",".hot6-list, .left-btn, .right-btn",function(){
    //     // })
    //     var cro = document.getElementById("shop-hot6");
    //     cro.onclick = function(e){
    //         var e = e || window.event;
    //         var target = e.target || window.event.srcElement;
    //         var croUl = cro.getElementsByClassName("hot6-list")[0]
    //         var flag = false;
    //         if(target.className == "left-btn"){
    //             if(!flag){
    //                 croUl.style.left = " 0px",
    //                 croUl.style.transition = "1.5s"
    //             }
    //         }
    //         if(target.className == "right-btn"){
    //             if(!flag){
    //                 croUl.style.left = " -730px",
    //                 croUl.style.transition = "1.5s"
    //             }
    //         }
    //     }      
    // }

    function crosswise(){
        $("#shop-hot6").on("click",".hot6-list, .left-btn, .right-btn",function(){
            var oUl = $("#shop-hot6 .hot6-list");
            if($(this).attr("class") == "left-btn"){
                oUl.css({
                    left: "0px",
                    transition : "1s",
                })
            }
            if($(this).attr("class") == "right-btn"){
                oUl.css({
                    left: "-720px",
                    transition : "1s",
                })
            }
        })
    }
   
    return {
        crosswise
    }
});
    