import { VIEW_USERS } from "../constants/ActionType";

const initialStateLogin = {
  login: {
    isLoggedIn: false,
  },
  user:[]
};
const userReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case VIEW_USERS:
      return {
        user: action.user
      };
    default:
      return state;
  }
};

export { userReducer };
