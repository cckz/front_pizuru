import React, { Component } from 'react';
import { Layout } from 'antd';

import styled from 'styled-components';
import HeaderCopm from './Header'
import ContentComp from './Content'
import FooterComp from './Footer'
import './style.css';

const Container = styled.div`
   width: 960px;
   margin: auto;
`

class App extends Component {

  render() {
    return (
      <Layout className="layout">
        <Container>
          <HeaderCopm />
        </Container>
        <Container>
          <ContentComp />
        </Container>
        <Container>
          <FooterComp />
        </Container>
      </Layout>
    );
  }
}

export default App;