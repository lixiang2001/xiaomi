module.exports={
    devServer:{
        port:8085,
        host:"localhost",
        https:false,
        open:true,
        proxy:{
            '/api':{
                target:"http://mengxuegu.com:7300/mock/5ee1078aaed99d0634618f25",
                changeOrigin:true,
                pathRewrite:{
                    '/api':'',
                } 
            }

        }
    }
}