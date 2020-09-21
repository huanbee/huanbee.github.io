import { ADD_USER, VIEW_USERS } from "../constants/ActionType";
import { onAddUser, onLoadUsers } from "../api/index";

const addedUser = (data) => ({
    type: ADD_USER,
    data,
});

const addUser = (data) => (dispatch) =>
    onAddUser(data).then((res) => dispatch(addedUser(res.data)));

const loadedUsers = (users) => ({
    type: VIEW_USERS,
    users,
});

const loadUsers = () => (dispatch) =>
    onLoadUsers().then((res) => dispatch(loadedUsers(res.data.users)));

export { addUser, loadUsers };
