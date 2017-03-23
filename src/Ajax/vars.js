import { NO, dealCode } from '../Utils/utils.js'
import { zhuanfa } from '../Ajax/get.js'
import { baseInfo } from "../Ajax/get.js"
export const server_url = ''

export const failAction = () => {
    alert("服务器错误");
}
export const dumbWrapper = ({
    promise,
    successCB = NO,
    failCB = failAction
}) => {
    promise.then((ret) => {
        dealCode(ret, successCB)
    }, (e) => {
        failCB(e)
    })
}

export const sendMessage = (url) => {
    let params = {
        url: url,
    };
    dumbWrapper({
        promise: baseInfo(params),
        successCB: (e) => {
            wxConfig({
                timestamp: e.data.weJsapiSignature.timestamp,
                nonceStr: e.data.weJsapiSignature.nonceStr,
                signature: e.data.weJsapiSignature.signature
            });
            console.log('get info success')
            wx.ready( () => {
              console.log('wechat share ready');
                fenxiang({
                    title: e.data.activityDesc.shareTitle || '史上最准的户型测试，没有之一！',
                    desc: e.data.activityDesc.shareContent || '没想到还有化解方式，你也快来试一试吧～',
                    link: "http://inhouse.moovi-tech.com/index.html",
                    imgUrl: 'http://inhouse.moovi-tech.com'+e.data.activityDesc.shareImg || 'http://inhouse.moovi-tech.com/static/sharepicture.jpg',
                })
            })
            wx.error( (res) => {
              console.log(res)
            })
        }
    })

}

const ifSuccess = () => {
    dumbWrapper({
        promise: zhuanfa(),
        successCB: (e) => {
          console.log(e)
        }
    })
}

export const wxConfig = ({
    timestamp,
    nonceStr,
    signature
}) => {
    wx.config({
        debug: false,
        appId: "wxd83f1f75c115031c",
        timestamp: timestamp,
        nonceStr: nonceStr,
        signature: signature,
        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone"]
    })

}

export const fenxiang = (
    {
        title,
        desc,
        link,
        imgUrl,
    }
) => {
  console.log(title,desc,link,imgUrl);
  console.log(title);
  console.log(link);
  console.log(imgUrl);
    wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: ifSuccess,
        cancel: function() {}

    });
    wx.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: ifSuccess,
        cancel: function() {}
    });
    wx.onMenuShareQQ({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: ifSuccess,
        cancel: function() {}
    });
    wx.onMenuShareQZone({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: ifSuccess,
        cancel: function() {}
    });
}
