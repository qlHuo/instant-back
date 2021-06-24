/*
 * @Author: holyer
 * @Date: 2021-06-14 19:57:45
 * @LastEditTime: 2021-06-16 12:54:46
 * @Description: 
 * 且将新火试新茶，诗酒趁年华
 */

// 引入公共文件
const Common = require('./common');
// 引入常量
const Constant = require('../constant/constant');
// 引入dateformat包
const dateFormat = require('dateformat');
// 引入Token处理方法
const Token = require('./token');
// 设置默认Token过期时间，单位为s
const TOKEN_EXPIRE_SENCOND = 3600;

// 引入user数据库映射文件
const UserModel = require('../model/user');
const { auto } = require('async');

/**
 * @Description 登录方法
 * @Author holyer
 * @Date 2021/06/15 09:04:46
 * @param req 请求参数 
 * @param res 响应参数
 */
function login(req, res) {
    // 定义一个返回对象
    const resObj = Common.clone(Constant.DEFAULT_SUCCESS);

    // 定义一个async任务
    const tasks = {
        // 校验参数方法
        checkParams: function (cb) {
            // 调用公共方法中的校验参数方法，如果成功则继续后面的操作
            // 如果失败,则传递错误信息到async的最终方法
            Common.checkParams(req.body, ['username', 'password'], cb);
        },
        // 查询方法
        query: ['checkParams', (result, cb) => {
            // 通过用户名密码去数据库中查询
            UserModel
            .findOne({
                where: {
                    username: req.body.username,
                    password: req.body.password,
                }
            })
            .then(function (result) {
                // 处理查询结果
                // 如果查询到了结果，将查询后的数据组装返回
                if(result) {
                    resObj.data = {
                        id: result.id,
                        username: result.username,
                        password: result.password,
                    }
                    // 将user的id保存到Token中
                    const userInfo = {
                        id: result.id
                    }
                    // 生成Token
                    let token = Token.encrypt(userInfo, TOKEN_EXPIRE_SENCOND);
                    resObj.data.token = token;
                    // 继续向后操作，传递user的id参数
                    cb(null, result.id);
                } else {
                    // 如果没有查询到结果，就返回登录错误相关信息到async的最终方法中
                    cb(Constant.LOGIN_ERROR);
                }
            })
            .catch(function (err) {
                // 传递错误信息到async的最终方法
                cb(Constant.DEFAULT_ERROR)
            });
        }],
    };
    // 执行公共方法中的autoFn方法返回数据 
    Common.autoFn(tasks, res, resObj);
}

// 配置对象
const exportsObj = {
    login
}
// 导出配置对象
module.exports = exportsObj;



