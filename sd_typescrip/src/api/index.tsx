import axios from 'axios'

axios.defaults.headers.common.authorization = `Bearer ${localStorage.getItem("token")}`;

function onLogin(data:any) {
    return axios.post("https://medical-be.herokuapp.com/api/doctor/login", data)
}

function fetchStatistic() {
    return axios.get("http://medical-backend.herokuapp.com/api/news/get-statistic")
}

var Storage = {
    users: []
}

function onLoadUsers () {
    return new Promise(resolve => {
        console.log("Users: ", Storage.users)
        setTimeout(() => { resolve({ data: { users: Storage.users } })}, 1000)
    })
}

export { onLogin, fetchStatistic, onLoadUsers }