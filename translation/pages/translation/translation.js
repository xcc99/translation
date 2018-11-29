//logs.js
const util = require('../../utils/util.js')
const app = getApp() //获取全局app
Page({
  data: {
    curLang: {},
    langList: app.globalData.langList
  },
  onShow: function(){
    this.setData({'curLang': app.globalData.curLang})
    console.log(app.globalData.curLang)
  },
  onTapItem:function(e){
    let langObj = e.currentTarget.dataset //找到该元素的父元素上的关于date的所有自定义属性
    wx.setStorageSync('language', langObj)//把一个完整的语言对象存起来
    this.setData({'curLang': langObj})
    app.globalData.curLang = langObj
    wx.switchTab({url: '/pages/index/index'})//跳转到app.json在tabbar上定义的页面
  }
})
