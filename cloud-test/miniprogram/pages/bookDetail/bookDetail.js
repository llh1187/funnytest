// pages/bookDetail/bookDetail.js
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('mybook').doc(options.id).get({
      success: res =>{
        this.setData({
          book:res.data,
          id:options.id
        });
      },
      fail: err =>{
        console.error(err);
      }
    })
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
  update:function(event){
    // console.log("1"),
    // console.log(this.data.id)确实是id
    console.log(event),
      db.collection('mybook').doc(this.data.id).update({
        // data 传入需要局部更新的数据
        data: {
          // 表示将 done 字段置为 true
          // done: true
          showapi_res_body:{
            data:{
              title: "局部更新测试"
            }
          }
         //字段 showapi_res_body.data.title更改方法。
        },
        success(res) {
          console.log(res)
        }
      })
  },
  delete:function (event) {
    db.collection('mybook').doc(this.data.id).remove({
      success(res) {
        console.log(res)
      }
    })
  }
})