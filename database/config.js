/*
 * @Author: holyer
 * @Date: 2021-06-15 00:21:35
 * @LastEditTime: 2021-06-15 15:11:52
 * @Description: 数据库域名配置信息
 * 且将诗酒趁年华
 */

const config = {
    // 是否是调试模式
    DEBUG: true, 
    // mysql 数据库连接配置
    // MYSQL: {
    //     host: 'localhost',
    //     database: 'instant',
    //     username: 'root',
    //     password: 'root'
    // }
    MYSQL: {
        host: 'rds.aurorablog.top',
        database: 'instant',
        username: 'hql_2020',
        password: 'hql990418RDS'
    }
};

// if (process.env.NODE_ENV === 'production') {
//     // 生产环境中MySQL数据库中连接配置
//     config.MYSQL =  {
//         host: 'rds.aurorablog.top',
//         database: 'instant',
//         username: 'hql_2020',
//         password: 'hql990418RDS'
//     }
// }

module.exports = config;
