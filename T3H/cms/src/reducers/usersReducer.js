import { VIEW_USERS } from "../constants/ActionType";

const initialStateUsers = {
    list: []
};

const userReducer = (state = initialStateUsers, action) => {
    switch (action.type) {
        case VIEW_USERS:
            return {
                list: action.users
            };
        default:
            return state;
    }
};

export { userReducer };
