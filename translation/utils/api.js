//api.js 主要用于调用接口
import md5 from './md5.min.js'
const appid = '20181107000231223'
const key = 'doJjv4YxrJ2WLz5jafSk'
//参数
function translate(q,{ from ='auto',to = 'auto'} = {from: 'auto', to: 'auto'}){
  return new Promise((resolve,reject)=>{
    let salt = Date.now() //salt必须是随机数，此表示当前据1970年的毫秒数
    let sign = md5(`${appid}${q}${salt}${key}`)
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data: {
        q,//请求翻译query
        from, //翻译源语言
        to,//译文语言
        appid,
        salt,//随机数
        sign
      },
      success(res){
        console.log(res)
        if (res.data && res.data.trans_result){
          resolve(res.data)
        }else{
          reject({status: 'erro', msg: '翻译失败'})
          wx.showToast({
            title: '翻译失败',
            duration: 3000,
          })
        }
      },
      fail(){
        reject({ status: 'erro', msg: '翻译失败' })
        wx.showToast({
          title: '翻译失败',
          duration: 3000,
        })
      }
    })
  })
}
module.exports.translate=translate;
