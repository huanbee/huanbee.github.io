import { createStore, applyMiddleware } from "redux";
import reducerAll from "../reducers";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(reducerAll, composeWithDevTools(applyMiddleware(thunk)));
