const {src, dest, watch, series} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();


// SassTask

const SassTask = () => {
    return src('./src/scss/*.scss', {sourcemaps: true})
        .pipe(sass())
        .pipe(dest('./dist/style', {sourcemaps: '.'}))
}

// BrowserSync
const BrowserSyncServ = (cb) => {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
    cb()    
}


const BrowserSyncReload = (cb) => {
    browserSync.reload()
    cb()    
}

// Watch

const watchTask = () => {
    watch('./dist/*.html', BrowserSyncReload)
    watch('./src/scss/**/*.scss', series(SassTask, BrowserSyncReload))
}

// export
exports.default = series (
    SassTask,
    BrowserSyncServ,
    watchTask,
)