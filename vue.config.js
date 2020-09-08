module.exports = {
    devServer: {
        port: 8085,
        host: "localhost",
        https: false,
        open: true,
        proxy: {
            '/api': {
                target: "http://mall-pre.springboot.cn",
                changeOrigin: true,
                pathRewrite: {
                    '/api': '',
                }
            }
        },
    },
    lintOnSave: false, //关闭格式检查
    // outputDir:"dist2",   //存放 打包文件的目录 默认 dist
    // assetsDir:"assets",   // 静态资源（js，css，img）打包存放路径（相对outputDir 指定的路径）
    // indexPath:"out/index.html",   // index.html  主页面打包后存放的目录（相对outputDir 指定的路径）
    productionSourceMap: false, //打包时不会生成  .map 文件  加快打包速度，对我们代码(源码)也更加安全。

    /*  publicPath:        Default: '/'
    默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
    如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
    例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
    */ 
    // publicePath:'/app',

    /*  outputDir:   Default: 'dist'
        当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 
            作用就是自定义 打包后文件存放的目录
    */
    // outputDir:'dest',

    // indexPath:'demo.html ',
    /*
    indexPath:     Default: 'index.html'
    指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    */


    /*  filenameHashing：    Default: true
        默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
            如果文件没有哈希，那就造成浏览器缓存，获取数据是会很多默然。
    */ 

    //删除预加载
    chainWebpack:(config)=>{
        config.plugins.delete('prefetch');
    }
}