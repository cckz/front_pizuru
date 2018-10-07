import React, { Component } from 'react';
import { Layout } from 'antd';

class FooterComp extends Component {
    render() {
        const {Footer} = Layout;
        return (
            <Footer style={{ padding: '0 50px', textAlign: 'center' }}>
                © 2018 pizu.ru. All rights reserved
            </Footer>
        )
    }
}

export default FooterComp;