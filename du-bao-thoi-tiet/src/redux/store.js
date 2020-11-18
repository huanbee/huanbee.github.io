import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sc1Reducer from "../scenes/DuBaoThoiTiet/reducers";
import watchThoiTiet from "../scenes/DuBaoThoiTiet/saga";

export const allReducer = combineReducers({
  scr1: sc1Reducer,

});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducer, compose(applyMiddleware(sagaMiddleware)));
store.subscribe(() => {
  console.log("thay doi moi", store.getState());

});

sagaMiddleware.run(watchThoiTiet);

export default store;
