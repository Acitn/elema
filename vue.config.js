const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
	//关闭source map好处
	//减少打包编译的时间；
	//避免在生产环境中用F12开发者工具在Sources中看到源码。
	productionSourceMap: false,
	devServer:{
	    port: 8088,//固定端口
	    hot: true,//开启热跟新
	    open: 'Google Chrome'//固定打开浏览器
	},
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'),
                'assets': resolve('src/assets'),
                'css':resolve('src/assets/css'),
                'images':resolve('src/assets/images'),
                'views': resolve('src/views'),
                'components':resolve('src/components'),
                'api':resolve('src/api'),
                'mixins':resolve('src/mixins'),
                'store': resolve('src/store'),
                'service':resolve('src/service'),
            }
        }
    },
}