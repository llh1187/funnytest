const cloud = require('wx-server-sdk')
cloud.init({})
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    return await db.collection('mybook').where({
      _openid: "os0wg5QvmmkyasIS3Aj54epp9US0"
    })
      .update({
        data: {
          showapi_res_body:{
            data:{
              price:"100元"
            }
          }
        },
      })
  } catch (e) {
    console.error(e)
  }
}