import { server_url } from './vars.js'
import { NO } from '../Utils/utils.js'
import { dumbWrapper } from './vars.js'
import request from 'superagent'

const factory = (url) => (params) => {
    return Promise.resolve(
        new Promise((resolve, reject) => {
            request.get(server_url + url).set('Content-Type', 'application/x-www-form-urlencoded').query(params).end((error, res) => {
                error ? reject(error) : resolve(res.body);
            })
        })
    )
};
// 获取所有楼盘
export const allEstate = factory('/weixin/fengshui.do?getAllLoupan');

// 查看风水
export const advice = factory('/weixin/fengshui.do?getAllDesc=');

// 获取验证码
export const sendCode = factory('/weixin/fengshui.do?sendCode');

// 获取化解方法
export const defuse = factory('/weixin/fengshui.do?getHuajie=');

//预约看房
export const yuyue = factory('/weixin/fengshui.do?yuyue');

//获取分享信息
export const baseInfo = factory('/weixin/fengshui.do?getActivityBaseInfo=');

//转发分享统计
export const zhuanfa = factory('/weixin/fengshui.do?fengxiangLog');