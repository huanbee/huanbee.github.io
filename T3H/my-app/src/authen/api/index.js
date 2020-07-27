import axios from 'axios'

axios.defaults.headers.common.authorization = `Bearer ${localStorage.getItem("token")}`;

function login(data) {
    // console.log("login....")
    // let data = {
    //     username: "admin",
    //     password: "123456"
    // }
    return axios.post("https://medical-be.herokuapp.com/api/doctor/login", data)
}

function fetchStatistic() {
    return axios.get("http://medical-backend.herokuapp.com/api/news/get-statistic")
}

export { login, fetchStatistic }