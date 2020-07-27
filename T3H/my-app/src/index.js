import React from 'react';
import ReactDOM from 'react-dom';
// import RandomGame, { App, App2 } from './App';
// import Caculate from './caculate/Caculate'
// import JsxExtend from './jsxextend/JsxExtend'
// import Parent from './lifecyle/Parent'
// import Auth from './authen/App'
// import Children from './children/Children'
// import MyComponent from './class-func-component/MyComponent'
// import Counter from './redux/Counter'
import Counter from './set-state/Counter';    
// import Counter from './redux/views/Counter'
import * as serviceWorker from './serviceWorker';
import store from './redux/store/store';
import { Provider } from 'react-redux';

import MyApp_hooks from './hooks/FuncForm'

// ReactDOM.render( <RandomGame user_name="admin" />, document.getElementById('root'));
// ReactDOM.render( <Caculate />, document.getElementById('root'));

const App = function() {
    return (
        // <Provider store={store}>
            // <Counter></Counter>
        // </Provider>

        <MyApp_hooks></MyApp_hooks>
    )
}

ReactDOM.render( <App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
