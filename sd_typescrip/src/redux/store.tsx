import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { loginReducer } from "../scenes/Login/loginReducer";
import numReducer from "../scenes/Ex1/numReducers";
import { loginState } from "../scenes/Login/types";
import createSagaMiddleware from 'redux-saga';
import watchLoginRequestStart from "../scenes/Login/saga";

export interface ApplicationRootState {
  readonly login: loginState;
}

export const allReducer = combineReducers({
  num: numReducer,
  login: loginReducer,
});
// const store = createStore(allReducer);
// // store.subscribe(() => {
// //   console.log("thay doi moi:", JSON.stringify(store.getState()));
// // });
// export default store;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducer,compose(
      applyMiddleware(sagaMiddleware)  
));
sagaMiddleware.run(watchLoginRequestStart); 
export default store;