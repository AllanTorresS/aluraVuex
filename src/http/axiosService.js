import axios from 'axios-observable';
import GlobalStore from '@/globalStorage/GlobalStore';

const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers:{
        'Accpet':'application/json',
        'Content': 'application/json'
    }
})

http.interceptors.request.use(config=>{
    const token = GlobalStore.state.token;
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;

})

export default http;