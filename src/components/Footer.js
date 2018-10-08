import React, { Component } from 'react';
import { Layout } from 'antd';
import  {Container} from './styledComponents'

class Footer extends Component {
    render() {
        const {Footer} = Layout;
        return (
            <Container>
                <Footer style={{ padding: '0 50px', textAlign: 'center' }}>
                    © 2018 pizu.ru. All rights reserved
                </Footer>
            </Container>
        )
    }
}

export default Footer;