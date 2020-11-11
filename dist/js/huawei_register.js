// 华为登陆页面入口文件
console.log('加载成功');

require.config({
    paths:{
        jquery:"jquery-1.10.1.min",
        "jquery-cookie":"jquery.cookie",
        parabola:"parabola",
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

require(["huawei_main_register"],function(huawei_main_register){
    huawei_main_register.register()
})