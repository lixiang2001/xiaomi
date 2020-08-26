import Mock from 'mockjs'

//参数1：请求地址   参数2：返回值
Mock.mock('/api/user/info',{
    "status": 0,
    "flag": true,
    "msg": "获取用户信息成功",

    "data": {
      "id": 6008,
      "name": "易霞",
      "roles": [
        "manager"
      ]
    }
});