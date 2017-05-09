import { dumbWrapper } from '../Ajax/vars.js'

export const NO = () => {}
    // import { Toast } from 'quasar'

export const dealCode = (data, successCB) => {
    if (data.success) {
        successCB(data);
    } else {
        switch (data.operateCode) {
            case 300:
                alert("微信授权登录失败");
                break;
            case 400:
                alert("服务器错误");
            case 403:
                let appId = "wxd83f1f75c115031c";
                appId = "wx3093c760212d6ca2"; // innnhome的appid
                let redirect_uri = "http://inhouse.moovi-tech.com/login.html";
                let return_url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
                window.location.href = return_url;
                break;
            default:
                alert("验证失败，请重新登录");
                break;
        }
    }
}
