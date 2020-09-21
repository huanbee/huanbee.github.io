import { onLogin } from '../../api';
import { LOADING,  REQUEST_LOGIN_COMPLETED,  REQUEST_LOGIN_ERROR,  REQUEST_LOGIN_START } from '../../redux/ActiveType';
import { AuthenticationInput } from './dtos/authenticationInput';
import { AuthenticationResult } from './dtos/authenticationResult';


export const requestLoginStart = (input: AuthenticationInput) =>({
   type:REQUEST_LOGIN_START,
   input
}) 
export const loadingRQ = () =>({
   type:LOADING,
})
export const requestLoginCompleted = (output: AuthenticationResult) =>({
   type:REQUEST_LOGIN_COMPLETED,
   output
})
export const requestLoginError = () =>({
    type:REQUEST_LOGIN_ERROR,
 })
 



// export const logined = (data: any) => (dispatch: any) => {
//     console.log("data user:",data);
//     return onLogin(data).then((res: any) => {
//         localStorage.setItem("token", res.data.token);
//         return dispatch(requestLoginStart(res.data))
//     })
// }