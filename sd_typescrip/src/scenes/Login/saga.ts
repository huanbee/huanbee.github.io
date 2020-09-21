import { notification } from 'antd';
import { type } from 'os';
import { call, put, takeLatest, race } from 'redux-saga/effects';
import { onLogin } from '../../api';
import { REQUEST_LOGIN_START } from '../../redux/ActiveType';
import {requestLoginCompleted, requestLoginError, requestLoginStart} from './loginAction';

export default function* watchLoginRequestStart(){
    yield takeLatest(
        REQUEST_LOGIN_START,
        requestLogin
    );
}

function* requestLogin(data: any) {
    try {
        const { output } = yield race({  
            output: call(onLogin, data.input)
        });
        if (output) {
            console.log("data Request",output);
            localStorage.setItem("token", output.data.token);
            notification.success({
                message: `Login successful`
            })
            yield put(requestLoginCompleted(output));
        }
        else {
            console.log("data Request Error",output);
            notification.error({
                message: `ERROR`,
                description: "Unspecified error",
                placement: "bottomRight"
            })
            yield put(requestLoginError());
        }
    } catch (error) {
        notification.error({
            message: `ERROR`,
            description: error.response.data.err,
            placement: "bottomRight"
        })
        yield put(requestLoginError());
    }
}