import axios from "axios"
import { Config } from "@jest/types"

const service = axios.create({
    baseURL : "http://rap2api.taobao.org/app/mock/239276"
})


service.interceptors.request.use(config=>{
    return config
})


service.interceptors.response.use(res=>{
    return res.data
})


export default service