
/*
Storage封装 
{"user":{"UserName":"yangwei","age":30,"sex":1}}
*/
const STORAGE_KEY = 'mall';
export default {
    //存储值
    setItem(key, value, module_name) {
        console.log(module_name);
        if (module_name) {
            let val = this.getItem(module_name);
            console.log(val);

            //如果 val是空的那就会创建这个对象并设置key和value
            val[key] = value;
            this.setItem(module_name, val)
        } else {
            //直接获设置info这个模块中的数据
            console.log("xxxx");
            let val = this.getStorage();
            val[key] = value;
            console.log(val);
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
            
        }
    },

    //获取某一个模块下的属性：user模块下面的UserName属性
    getItem(key, module_name) {
        //获取别的模块中的数据------递归
        if (module_name) {
            let val = this.getItem(module_name);
            if (val) return val[key];
        }
        //不需要获取别的模块中的数据
        let val1 = this.getStorage()[key];
        // console.log(val1);
         return val1;
    },

    //获取整个数据
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },

    //清空某一个值
    clear(key, module_name) {
        let val = this.getStorage();
        console.log(val);
        //清空某个模块中 一条数据  
        if (module_name) {
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        //清除后重新出存储
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    },

}

//JSON.parse() 将一个 JSON字符串转换为Object对象。
//JSON.stringify() 将Object对象转换成json字符串。