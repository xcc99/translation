//index.js
import { translate } from '../../utils/api.js'
//获取应用实例
const app = getApp()

Page({
  data: {
    query: '', //控制用户的输入
    result: [],//翻译后的文本
    curLang: {} //当前语言
  },
  onLoad(options){
    if(options.query){
      this.setData({query: options.query})
    }
  },
  onShow(){
    if(this.data.curLang.lang !== app.globalData.curLang.lang){
    this.setData({ 'curLang': app.globalData.curLang })
      this.onConfirm()
    }
    // console.log(this.data.curLang.lang)
  },
  onInput(e){
    this.setData({query: e.detail.value}) //在用户输入的时候把得到的值放到query

  },
  onTapClose(){//当用户点击x时，清除所有内容
    this.setData({ query: ''})
    this.setData({result: []})
  },
  onConfirm(){//用户点击确定时翻译
    if(!this.data.query) return //如果内容为空，直接返回
    translate(this.data.query,{from: 'auto',to:this.data.curLang.lang}) 
    .then(res=>{
      this.setData({'result': res.trans_result})//翻译结果
      // console.log(res)
      // console.log(this.data.query, res.trans_result[0].dst)
      let history = wx.getStorageSync('history') || []
      history.unshift({query: this.data.query, result: res.trans_result[0].dst })//在数组第一位新增
      history.length = history.length > 10 ? 10 : history.length
      wx.setStorageSync('history', history)
      console.log(history)
    })
  },
  copyResult(){
    console.log(this.data.result[0].dst)
    wx.setClipboardData({
      data: this.data.result[0].dst
    })
  }
})
