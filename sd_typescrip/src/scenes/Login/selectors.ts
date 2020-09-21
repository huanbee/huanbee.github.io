import { createSelector } from 'reselect';

import { initialStateLogin } from './loginReducer';
import { loginState } from './types';

export interface ApplicationRootState {
    readonly login: loginState;
}


const selectLogin = (state: ApplicationRootState) => state.login || initialStateLogin;

const makeSelectLoading = () => createSelector(selectLogin, substate => substate.loading);
const makeSelectisLoggedIn = () => createSelector(selectLogin, substate => substate.isLoggedIn);
// const makeSelectisMessage = () => createSelector(selectLogin, substate => substate.message);

export {
    makeSelectLoading,
    makeSelectisLoggedIn,
    // makeSelectisMessage
};