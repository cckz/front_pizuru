import React, { Component } from 'react';
import { Layout } from 'antd';

import SlidingTabs from './Tabs'

class ContentComp extends Component {
  render() {
    const {Content} = Layout;
    return (
      <Content style = {{ padding: "2rem 0" }}>
        <SlidingTabs />
      </Content>
    )
  }
}

export default ContentComp;
