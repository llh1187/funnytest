# 私房书柜

## 前言

目前已经做完了从前端到后端的交互，*删查改*已经做了，花了我大概一周的时间~~或者四五天？~~反正跟着腾讯云布道师（称呼有点怪呀:smile:）白宦成，从头做到尾，用有赞的小程序UI框架[Vant Weapp](https://github.com/youzan/vant-weapp)，小程序提供的云函数，云数据库，成功做出来了一个**私房书柜**。

## 基本功能

1. 扫码加书

2. 我的藏书

   2.1 展示图书列表

   2.2 查看详情

   + 更新数据
   + 删除数据



## 实现流程

### UI框架

在这里就不赘叙怎么使用UI框架搭建基本页面了，简单来说就是在你掌握**[小程序简易教程](<https://developers.weixin.qq.com/miniprogram/dev/>)**以及**[自定义组件介绍](<https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/>)**的情况下，把 



​	" `van-card": "../../vant/card/index` "等代码



加入到相应页面的json文件中的，类似下面的

```javascript

```



​	{

​	  "usingComponents": {

​	    "van-card": "../../vant/card/index",

​	    "van-tag": "../../vant/tag/index",

​	    "van-button": "../../vant/button/index"

​	  }

​	 }

```

```

需要注意的是，**../../vant**这些路径需要根据实际情况来选，然后就可以在同一个页面的xml文件中加入相应的<card>、<tag> 或者<button>了。**和json文件一一对应**，前面忘记强调了，*要下载**Vant Weapp**项目的文件下来，放到自己文件的本地项目中去，然后根据实际的文件夹名字去引用（这个不用教了吧:smile:）*。



### 构建云端函数

先在微信开发者工具那里的**cloudfunctions**创建一个函数，然后自己再右键这个函数，选择*在终端中打开*，然后打开cmd，cd进入当前目录，键入*npm install*。再然后自己就可以编写函数了，其实就是一个包含json、js、wxml和wxss文件的文件夹，然后编写完成，再选择**上传并部署所有文件**。



### 构建云端数据库

在开发者工具中点击左上角的云开发，会有一个**云开发控制台**出现，在那里摸索一下就知道，可以创建集合，然后添加记录，在记录中添加自己想要的字段。看到这里，假如是学习过数据库的，就知道，集合=表，记录=行，字段=列。管理者在云端数据库创建的记录，不包含openid。



### 构建联系

云端函数，云端数据库，本地页面怎么构成联系呢？还有，为什么需要云函数呢？



<u>数据库 API 分为小程序端和服务端两部分，小程序端 API 拥有严格的调用权限控制，开发者可在小程序内直接调用 API 进行非敏感数据的操作。对于有更高安全要求的数据，可在云函数内通过服务端 API 进行操作。云函数的环境是与客户端完全隔离的，在云函数上可以私密且安全的操作数据库。</u>

<u>数据库 API 包含增删改查的能力，使用 API 操作数据库只需三步：获取数据库引用、构造查询/更新条件、发出请求。</u>



<u>小程序内提供了专门用于云函数调用的 API。开发者可以在云函数内使用 [`wx-server-sdk`](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/wx-server-sdk.html) 提供的 [`getWXContext`](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-server-api/utils/getWXContext.html) 方法获取到每次调用的上下文（`appid`、`openid` 等），无需维护复杂的鉴权机制，即可获取天然可信任的用户登录态（`openid`）。</u>



具体请看文档：[云函数](<https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/capabilities.html#%E4%BA%91%E5%87%BD%E6%95%B0>)





```

```

>   

