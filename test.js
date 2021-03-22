const axios = require('axios')

axios.post('https://api.juejin.cn/search_api/v1/search', {
  cursor: '1',
  id_type: 0,
  key_word: 'url',
  limit: 20,
  search_type: 0,
}).then(res=>{
  // console.log(res);
}).catch(err=>{
  // console.log(err);
  console.log("请求失败");
})
