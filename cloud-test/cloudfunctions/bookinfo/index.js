// 云函数入口文件
// const cloud = require('wx-server-sdk')

// cloud.init()
var rp = require('request-promise')
// 云函数入口函数
exports.main = async (event, context) => {
  var res = rp('http://route.showapi.com/1626-1?showapi_appid=94129&showapi_sign=857372d37fc74ffb991cc922b5e73095&isbn='+event.isbn).then(html=>
  {
    return html;
  }).catch( err=>
  {console.log(err); }
  )
  return res
}