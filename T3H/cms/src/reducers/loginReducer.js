import { LOGIN } from "../constants/ActionType";

const initialStateLogin = {

    isLoggedIn: false,

};
const loginReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case LOGIN:
      return {

          isLoggedIn: true,

      };
    default:
      return state;
  }
  return state;
};

export { loginReducer };
