/*
 * @Author: holyer
 * @Date: 2021-06-14 23:33:44
 * @LastEditTime: 2021-06-14 23:52:57
 * @Description: 设置Token令牌机制，在用户登录成功之后，返回一个Token给前端，前端将Token保存起来，在后续请求接口时带上这个Token。除了登录接口之外，其他接口均需要对前端发过来的请求数据中的Token进行解析和校验。
 * 且将诗酒趁年华
 */

const jwt = require('jsonwebtoken');
// 设定一个密钥，用来加密和解密Token
const tokenKey = 'XfZEpWEn? ARD7rHBN';

// 定义一个对象
const Token = {
    /**
     * @Description token 的加密方法
     * @Author holyer
     * @Date 2021/06/14 23:44:47
     * @param data 需要加密在token中的数据
     * @param time token的过期时间，单位为s
     * @return {*} 返回一个Token
     */
    encrypt: function (data, time) {
        return jwt.sign(data, tokenKey, {expiresIn: time});
    },

    /**
     * @Description Token 解密方法
     * @Author holyer
     * @Date 2021/06/14 23:48:05
     * @param token 加密之后的Token
     * @return { Object } {{token: boolean (true 代表合法，false 表示不合法)，
     *  data: * (解密出来的数据或者错误信息)
     *  }}
     */
    decrypt: function (token) {
        try {
            let data = jwt.verify(token, tokenKey);
            return {
                token: true,
                data: data
            }
        } catch (error) {
            return {
                token: false,
                data: error
            }
        }
    }
}

module.exports = Token;
