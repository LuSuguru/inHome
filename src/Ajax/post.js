import { server_url, dumbWrapper } from './vars.js'
import request from 'superagent'

const factoryJson = (url) => (params) => {
    return Promise.resolve(
        new Promise((resolve, reject) => {
            request.post(server_url + url).type('application/json').send(params).end((error, res) => {
                error ? reject(error) : resolve(res.body);
            })
        })
    )
};
//请求新楼盘
export const newEstate = factoryJson('/weixin/fengshui.do?requestLoupan');

