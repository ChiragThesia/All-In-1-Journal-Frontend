import axios from "axios"

const axiosPrimary = ()=>{
    const instance = axios.create({
        baseURL:'http://localhost:8080',
        headers:{
            'Content-Type':'application/json',
        }
    })
    return instance
}

export default axiosPrimary
