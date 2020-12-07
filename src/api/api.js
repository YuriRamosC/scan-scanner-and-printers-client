import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.100.108:3001/',
    headers: {'Content-Type':'application/json'}
})
export default api;