// 购物车入口文件
// 详情页的入口文件
console.log('加载成功');

require.config({
    paths:{
        jquery:"jquery-1.10.1.min",
        "jquery-cookie":"jquery.cookie",
        huawei_shopping:"huawei_shopping",
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

require(["huawei_shopping"],function(huawei_shopping){
    huawei_shopping.shopping()
})