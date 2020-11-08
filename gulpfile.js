// 搭建gulp运行环境
const gulp = require("gulp");
// scss 插件
const sass = require("gulp-sass");
// HTML重命名插件
const rename = require("gulp-rename");
// 压缩html插件
const htmlmin = require("gulp-htmlmin");
// 压缩css插件
const cleanCSS = require('gulp-clean-css');
// 压缩js插件
const uglify = require("gulp-uglify");
// 定义服务器
const connect = require("gulp-connect");

// 拷贝html文件
gulp.task("copy-html",function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
});

// 拷贝图片
gulp.task("images",function(){
    return gulp.src("images/*.{png,gif,jpg}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
});

// 拷贝css及压缩css
sass.compiler = require('node-sass');
gulp.task("scss",function(){
    return gulp.src("*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(function(path){
        path.basename += '.min'
    }))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

// 拷贝js
gulp.task("scripts",function(){
    return gulp.src(['*.js','!gulpfile.js'])
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
})

// 拷贝json文件
gulp.task("data",function(){
    return gulp.src(['*.json','!package.json'])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

// 一次执行所有项目
gulp.task("build",["copy-html","images","scss","scripts","data"],function(){
    console.log('项目建立成功！');
});

// 启动监听
gulp.task("watch",function(){
    gulp.watch("*.html",['copy-html']);
    gulp.watch("images/*.{png,gif,jpg}",['images']);
    gulp.watch('*.scss',['scss']);
    gulp.watch(["*.js", "!gulpfile.js"],['scripts']);
    gulp.watch(["*.json", "!package.json"],['data']);
})

// 启动服务器
gulp.task("server",function(){
    connect.server({
        root: "dist",
        port: 9999,
        livereload: true
    })
})

// 启动
gulp.task("default", ['watch', 'server']);