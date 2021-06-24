/*
 * @Author: holyer
 * @Date: 2021-06-15 00:15:26
 * @LastEditTime: 2021-06-15 00:21:17
 * @Description: 统一管理返回值
 * 且将诗酒趁年华
 */

const obj = {
    // 默认请求成功
    DEFAULT_SUCCESS: {
        code: 1000, 
        msg: ''
    },
    // 默认请求失败
    DEFAULT_ERROR: {
        code: 188, 
        msg: '系统错误'
    }, 
    // 定义错误返回，缺少参数
    LACK: {
        code: 199, 
        msg: '缺少参数'
    },
    // 定义错误返回，Token验证失败
    TOKEN_ERROR: {
        code: 101, 
        msg: 'Token验证失败'
    },
    // 定义错误返回，用户名或密码错误
    LOGIN_ERROR: {
        code: 101, 
        msg: '用户名或密码错误'
    },

}

module.exports = obj;