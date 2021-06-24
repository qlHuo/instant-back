/*
 * @Author: holyer
 * @Date: 2021-06-15 09:22:37
 * @LastEditTime: 2021-06-15 13:20:23
 * @Description: login的数据库映射文件
 */
// 引入Sequelize模块
const Sequelize = require('sequelize');
// 引入数据库实例
const db = require('../database/db');

// 定义model
const User = db.define(
    'User',
    {
        // 主键
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        // 用户名
        username: {
            type: Sequelize.STRING(20),
            allowNull: false,   
        },
        // 密码
        password: {
            type: Sequelize.STRING(30),
            allowNull: false,   
        }
    },
    {
        // 是否支持驼峰
        underscored: true,
        // 是否开启时间戳，默认是开启的
        timestamps: false,
        // 数据库表名
        tableName: 'user',
    }
);

module.exports = User;
