let path = require('path');  
let vars = path.resolve(__dirname, 'static/css/variable.less') // style/variable.less 你的less文件路径 
module.exports = {  
    css: {  
        loaderOptions: {  
            less: {  
                globalVars: {  
                    "hack": `true; @import "${vars}"`  
                }  
            }  
        }  
    }  
}