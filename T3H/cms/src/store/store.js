import { createStore, applyMiddleware } from "redux";
import { loginReducer } from "../reducers/loginReducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(loginReducer, composeWithDevTools(applyMiddleware(thunk)));
