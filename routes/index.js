/*
 * @Author: your name
 * @Date: 2021-03-22 18:03:13
 * @LastEditTime: 2021-03-22 20:24:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /searchServer/routes/index.js
 */
const config = require('../config/index')
const axios = require('axios')

module.exports = exports = (app) => {
  app.get('/', (req, res) => {
    res.json({
      status: 'ok',
      version: config.version
    })
  })

  app.post('/searchJuejin', async function (req, res) {
    axios
      .post('https://api.juejin.cn/search_api/v1/search', req.body)
      .then((result) => {
        if (result.data.err_msg === 'success') {
          res.json({
            code: 200,
            data: result.data,
          })
        } else {
          res.json({
            code: 500,
            msg: '未知错误，err：' + result.data.err_msg,
          })
        }
      })
      .catch((err) => {
        res.json({
          code: 99,
          msg: '转发失败，err：' + err.message,
        })
      })
  })
}
