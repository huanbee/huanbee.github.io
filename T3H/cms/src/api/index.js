import axios from 'axios'

axios.defaults.headers.common.authorization = `Bearer ${localStorage.getItem("token")}`;

function onLogin(data) {
    return axios.post("https://medical-be.herokuapp.com/api/doctor/login", data)
}

function fetchStatistic() {
    return axios.get("http://medical-backend.herokuapp.com/api/news/get-statistic")
}

var Storage = {
    users: []
}

function onAddUser (user) {
    return new Promise(resolve => {
        setTimeout(() => { Storage.users.push(user); resolve({ data: { success: true } }) }, 1000)
    })
}

function onLoadUsers () {
    return new Promise(resolve => {
        setTimeout(() => { resolve({ data: { users: Storage.users } })}, 1000)
    })
}

export { onLogin, fetchStatistic, onAddUser, onLoadUsers }