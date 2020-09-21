import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectisLoggedIn } from '../../scenes/Login/selectors';
const stateSelector = createStructuredSelector<any, any>({
  isLoggedIn: makeSelectisLoggedIn()
});
const ProtectedRoute = ({ path, component: Component, permission, render, ...rest }: any) => {
  const { isLoggedIn } = useSelector(stateSelector);
  console.log("Router:", isLoggedIn);
  return (
    <Route
      {...rest}
      render={props => {
        console.log("Router Ex:", isLoggedIn);
        if (!isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          )
        }
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};



export default ProtectedRoute;
