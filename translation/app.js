//app.js
App({
  onLaunch: function () { //页面初始化时
    // 设置当前语言,先从本地存储找，如果没有就设置默认的
   this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
   console.log(this.globalData.curLang)
  },
  globalData: {
    curLang: {},
    langList: [
      {
        'chs': '英语',
        'lang': 'en',
        'index': 0
      },
      {
        'chs': '简体中文',
        'lang':'zh',
        'index': 1
      },
      {
        'chs': '法语',
        'lang': 'fra',
        'index': 2
      },
      {
        'chs': '日语',
        'lang': 'jp',
        'index': 3
      },
      {
        'chs': '韩语',
        'lang': 'kor',
        'index': 4
      },
      {
        'chs': '西班牙语',
        'lang': 'spa',
        'index': 5
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara',
        'index': 6
      },
      {
        'chs': '泰语',
        'lang': 'th',
        'index': 7
      },
      {
        'chs': '德语',
        'lang': 'de',
        'index': 8
      },
      {
        'chs': '繁体中文',
        'lang': 'cht',
        'index': 9
      }
    ]
  }
})