/*公共方法*/

const async = require('async');
// 引入常量
const Constant = require('../constant/constant');

/**
 * @Description 克隆方法 克隆一个对象
 * @Author holyer
 * @Date 2021/06/14 23:10:17
 * @param { Object } obj
 * @return { any }
 */
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * @Description 校验参数的全局方法
 * @Author holyer
 * @Date 2021/06/14 23:12:34
 * @param { * } params 请求的参数集
 * @param { * } checkArr 需要验证的参数
 * @param { * } cb 回调
 */
function checkParams(params, checkArr, cb) {
    let flag = true;
    checkArr.forEach(v => {
        if (!params[v]) {
            flag = false;
        }
    });
    if (flag) {
        cb(null)
    } else {
        cb(Constant.LACK);
    }
}

/**
 * @Description 返回统一方法，返回JSON格式数据
 * @Author holyer
 * @Date 2021/06/14 23:17:50
 * @param task      当前controller执行task
 * @param res       当前controller的response
 * @param resObj    当前controller返回的JSON对象
 */
function autoFn(task, res, resObj) {
    async.auto(task, function (err) {
        // 返回了错误信息，那么就返回错误信息
        if (!!err) {
            console.log(JSON.stringify(err));
            res.json({
                code: err.code || Constant.DEFAULT_ERROR.code,
                msg: err.msg || JSON.stringify(err)
            })
        } else {
            res.json(resObj);
        }
    })
}

const exportsObj = {
    clone,
    checkParams,
    autoFn
}
// 导出对象，方便其他方法调用
module.exports = exportsObj;