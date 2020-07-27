import React from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';


function PrivateRoute({ children, isLoggedIn , ...rest}) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return !isLoggedIn ? (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { location },
                        }}
                    />
                ) : (
                    children
                );
            }}
        />
    );
}

function mapDispatchToProps(state) {
    console.log(state)
    return {
        isLoggedIn: state.login.isLoggedIn
    };
  }
  
  export default connect(mapDispatchToProps)(PrivateRoute);