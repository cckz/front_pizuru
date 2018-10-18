import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import {isAuthenticated} from "../reducers";
import {login} from "../actions/auth";

class App extends Component {

  render() {
    return (
      <Layout className="layout">
        <Header />
        <Content />
        <Footer />
      </Layout>
    );
  }
}

export default App;
