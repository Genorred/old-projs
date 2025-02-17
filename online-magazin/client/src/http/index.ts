import axios from "axios";
const $host = axios.create({
    baseURL: 'http://localhost:5000/'
})
const $authHost = axios.create({
    baseURL: 'http://localhost:5000/'
})
const authInterception = (config: any) => {
    config.headers.authorization = `barer ${localStorage.getItem('token')}`
    return config
}
$authHost.interceptors.request.use(authInterception)
export {
    $host,
    $authHost
}