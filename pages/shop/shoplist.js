// pages/shop/shoplist.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto:'店铺引用',
    selectshopname:null,
    shopitem:[
      { id: '1', name: '新华药店', addr: '新华街道1号', mobile: '13111111111'},
      { id: '1', name: '劲浪药店', addr: '劲浪街道2号', mobile: '13122222222'}
    ],
    shopinfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  bindKeyInput : function (e) {
    this.setData({
      selectshopname: e.detail.value
    })
  },

  selectShopInfo: function (e) {
    console.log(this.data.selectshopname);
    var shopinfo = null;
    var tempitem = this.data.shopitem;
    for (var i in tempitem){
      if (tempitem[i].name == this.data.selectshopname){
        shopinfo = tempitem[i];
        break;
      }
    }
    this.setData({
      shopinfo: shopinfo
    })
  },

  bindShopInfo: function () {
    console.log(this.data.shopinfo);
    app.globalData.shopinfo = this.data.shopinfo;

    wx.showToast({
      title:'绑定店铺成功',
      icon:'none',
      mask:'true',
      duration:2000
    })

    wx.navigateBack({
    })
  }
})