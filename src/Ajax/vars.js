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
            wx.ready( () => {
                fenxiang({
                    title: e.data.activityDesc.shareTitle,
                    desc: e.data.activityDesc.shareContent,
                    imgUrl: e.data.activityDesc.shareImg,
                })
            })
        }
    })

}

const ifSuccess = () => {
    dumbWrapper({
        promise: zhuanfa(),
        successCB: (e) => {}
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
    title,
    desc,
    link = "http://inhouse.moovi-tech.com/",
    imgUrl,
) => {
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
