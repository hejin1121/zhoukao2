const gulp = require('gulp');
const webserver = require('gulp-webserver');
gulp.task('server', () => {
    return gulp.src('./src')
        .pipe(webserver({
            port: 9090,
            open: true,
            livereload: true,
            proxies: [{
                source: '/api/list',
                target: 'http://localhost:3000/api/list'
            }, {
                source: '/api/xiang',
                target: 'http://localhost:3000/api/xiang'
            }]
        }))
})