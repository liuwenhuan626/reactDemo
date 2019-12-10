import axios from "./axios"


export const getUserList = ()=>{
   return axios.post("/api/userList")
}