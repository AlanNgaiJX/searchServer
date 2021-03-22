/*
 * @Author: your name
 * @Date: 2021-03-22 18:01:45
 * @LastEditTime: 2021-03-23 00:35:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /searchServer/app.js
 */
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const config = require('./config/index')
const app = express()

//设置跨域访问 nginx下不要
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=UTF-8");
//   next();
// });


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

routes(app)

app.listen(config.port, () => {
  console.log(`${config.appName} is server on ${config.host}:${config.port}`)
})
