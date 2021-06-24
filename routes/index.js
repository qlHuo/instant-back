/*
 * @Author: holyer
 * @Date: 2021-06-14 19:33:20
 * @LastEditTime: 2021-06-15 10:30:58
 * @Description: 
 * 且将新火试新茶，诗酒趁年华
 */
// 引入 express 对象
var express = require('express');
// 引入路由对象
var router = express.Router();

// 引入自定义的controller, 具体的业务查询逻辑
const indexController = require('../controllers/index');

/* 定义登录路由，post请求 */
router.post('/login', indexController.login);

// 导出路由，供app.js文件调用
module.exports = router;
