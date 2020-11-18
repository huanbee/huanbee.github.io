//component
import React from 'react';
import { Route, Switch } from "react-router-dom";
import DefaultLayout from '../../scenes/DefaultLayout';
import Dubaothoitiet from '../../scenes/DuBaoThoiTiet';
import NotPage404 from '../../scenes/NotPage404';
import myProfile from '../../scenes/Profile';

const RouterIndex = () => {
  return (
    <Switch>
        <Route exact path="/" component={Dubaothoitiet}></Route>
        <Route path="/myProfile" component={myProfile}></Route>
        <Route path="/duBaoThoiTiet" component={Dubaothoitiet}></Route>
        <Route path="/du-bao-thoi-tiet" component={Dubaothoitiet}></Route>
        <Route path="/home" component={DefaultLayout}></Route>
        <Route component={NotPage404}></Route>
        {/* <Route path="/home" component={DefaultLayout}></Route> */}
      </Switch>
      
  )
}

export default RouterIndex