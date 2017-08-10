var gulp = require('gulp'),
    less = require('gulp-less');
    watch= require('gulp-watch');
    del =require('del');
 
 // 构建一个任务
gulp.task('less', function () {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

// 监听src/less文件的变化 并调用less任务编译less成css
gulp.task('watch',function(){
    gulp.watch('src/less/*.less',['less']);
})

// gulp.task('del',function(){
//     return del(['dist']);
// })



gulp.task('default',['less','watch']); 