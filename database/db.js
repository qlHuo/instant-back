/*
 * @Author: holyer
 * @Date: 2021-06-15 00:33:45
 * @LastEditTime: 2021-06-15 15:26:32
 * @Description: 为了便于其他文件引用数据库对象，需要将数据库对象实例化放在一个单独的文件中。db.js 文件就是用来存放Sequelize的实例化对象。
 * 且将诗酒趁年华
 */

const Sequelize = require('sequelize');
// 引入数据库连接配置
const CONFIG = require('./config');

// 实例化数据库对象
const sequelize = new Sequelize(
    CONFIG.MYSQL.database,
    CONFIG.MYSQL.username,
    CONFIG.MYSQL.password,
    {
        host: CONFIG.MYSQL.host,
        // 数据库类型
        dialect: 'mysql', 
        // 是否打印日志
        logging: CONFIG.DEBUG ? console.log : false,
        // 配置数据库连接池
        pool: {
            max: 5,
            min: 0, 
            idle: 10000
        },
        timezone: '+08:00', // 时区设置 
    }
)

module.exports = sequelize;
