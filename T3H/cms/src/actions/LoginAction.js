import { LOGIN } from '../constants/ActionType'
import { onLogin } from '../api/index'

const loggedIn = (data) => ({
    type: LOGIN,
    data
})

const login = (data) => (dispatch) => {
    return onLogin(data).then( (res) => {
        localStorage.setItem("token", res.data.token);
        return dispatch(loggedIn(res.data))
    })
}

export {
    login
}