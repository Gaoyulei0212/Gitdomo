// huawei_main.html入口文件
console.log("加载成功");
/*
    配置引入的模块路径 
*/
require.config({
    paths:{
        jquery:"jquery-1.10.1.min",
        "jquery-cookie":"jquery.cookie",
        parabola:"parabola",
        huawei_index:"huawei_index",
        huawei_nav:"huawei_nav",
        slideshow:"slideshow",
        crosswise:"crosswise",
    },
    // jquery-cookie 是依赖于jquery开发
    shim:{
        // 设置依赖关系
        "jquery-cookie":['jquery'],
        // parabola 不存从amd规范
        parabola:{
            exports:"_"
        }
    }
})

require(["huawei_index","huawei_nav","slideshow","crosswise"],function(huawei_index,huawei_nav,slideshow,crosswise){
    // JSON 数据
    huawei_index.data1();
    huawei_index.data2();
    huawei_index.data3();
    huawei_index.data4();
    huawei_index.data5();
    huawei_index.data6();
    // 导航部分
    huawei_nav.data1();
    huawei_nav.data2();
    huawei_nav.data3();
    huawei_nav.data4();
    huawei_nav.data5();
    // 导航栏数据
    huawei_nav.navShow();
    huawei_nav.rotateDraw();
    huawei_nav.fromHide();
    // 轮播图
    slideshow.slideshow();
    // 固定导航
    slideshow.fixedMenu();
    // 横向滚动条
    crosswise.crosswise()
     // 回到顶部
     slideshow.goTop();
    
})