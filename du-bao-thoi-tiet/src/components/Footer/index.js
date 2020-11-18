import React, { Component } from 'react';
import {Layout} from 'antd';
import {
    HeartFilled
  } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const   {Footer} = Layout;

class FooterLayout extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>HuanBee <FontAwesomeIcon icon={faCoffee} />©2020 <br></br>Made with <HeartFilled /> by Nguyễn Tiến Huấn</Footer>
        );
    }
}

export default FooterLayout;