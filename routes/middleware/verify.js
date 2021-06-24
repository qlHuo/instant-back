/*
 * @Author: holyer
 * @Date: 2021-06-14 23:54:01
 * @LastEditTime: 2021-06-15 10:31:16
 * @Description: 本项目为前后端分离项目，除了登录接口之外，其余接口都需要进行Token验证。
 * 既然是在很多接口的处理上都要添加相同的处理方法，那么最好的方式就是使用express中间件。
 * 在中间件中定义Token的验证方法，然后在需要Token验证的接口路由上添加验证中间件，即可完成接口的Token验证。
 * 
 * 且将诗酒趁年华
 */

// 引入Token处理的controller
const Token = require('../../controllers/token');
// 引入常量
const Constant = require('../../constant/constant');

/**
 * @Description 验证中间件
 * @Author holyer
 * @Date 2021/06/15 00:00:50
 * @param req 请求参数
 * @param res 响应参数
 * @param next next()
 */
function verifyToken(req, res, next) {
    // 如果请求路径是/login 也就是登录页面，则跳过，继续进行下一步
    if (req.path === '/login') {
        return next();
    }

    // 从请求头中获取token
    let token = req.headers.token;

    // 调用TokenController中Token解密方法，对参数token进行解密
    let tokenVerifyObj = Token.decrypt(token);
    // 如果Token验证成功，则继续下一步
    if (tokenVerifyObj.token) {
        next();
    } else {
        // 否则验证失败，则返回错误JSON
        res.json(Constant.TOKEN_ERROR);
    }
}


const exportObj = {
    verifyToken
}

module.exports = exportObj;
