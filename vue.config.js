
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    /*publicPath : process.env.NODE_ENV === 'production' ? './' : '/',*/
    publicPath: './',
    outputDir:"dist",
    assetsDir:'static',
    filenameHashing: true,
    chainWebpack: config => {
        config.module
            .rule('css')
            .test(/\.css$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({
                remUnit: 50
            })
    },
    //开启gzip压缩
    //生产环境，开启js\css压缩
    configureWebpack:config=>{
        if(process.env.NODE_ENV === 'production'){
            return{
                plugins: [

                    new CompressionPlugin({
                        test:/\.js$|\.html$|.\css/, //匹配文件名
                        threshold: 10240,//对超过10k的数据压缩
                        deleteOriginalAssets: false //不删除源文件
                    })
                ]
            }
        }

    },
    configureWebpack: {
        //关闭 webpack 的性能提示
        performance: {
            hints:false
        },
        performance: {
            hints:'warning',
            //入口起点的最大体积
            maxEntrypointSize: 50000000,
            //生成文件的最大体积
            maxAssetSize: 30000000,
            //只给出 js 文件的性能提示
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
    }


}