import axios from 'axios'
const baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.defaults.baseURL = baseURL
// 登陆验证
export const checkUser = params=>{
    return axios.post('login',params).then(res=>{
        return res.data
    })
}
// 用户列表
export const getUsers = params=>{
    return axios.get('users',params).then(res=>{
        return res.data
    })
}