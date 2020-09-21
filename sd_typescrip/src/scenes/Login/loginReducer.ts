import { REQUEST_LOGIN_START,LOADING, REQUEST_LOGIN_ERROR, REQUEST_LOGIN_COMPLETED } from "../../redux/ActiveType";

export const initialStateLogin = {
  isLoggedIn: false,
  loading: false,
};
declare var abp: any;

const loginReducer = (state = initialStateLogin, action:any) => {
  switch (action.type) {
    case REQUEST_LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case REQUEST_LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
      };
    case REQUEST_LOGIN_COMPLETED:
      // abp.auth.setToken(action.payload.accessToken, undefined);
      // abp.auth.setRoles(action.payload.roleList, undefined);
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
      };
    default:
      return state;
  }
};

export { loginReducer };
