import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {login} from '../actions/auth'
import {authErrors, isAuthenticated} from '../reducers/index'
import { Layout } from 'antd';

import Header from './Header'
import Footer from './Footer'
import LoginPage from './LoginPage'

const Login = (props) => {
    if (props.isAuthenticated) {
        return (
            <Redirect to='/'/>
        )
    } else {
        return (
            <Layout className="layout">
                <Header />
                <LoginPage {...props}/>
                <Footer />
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: authErrors(state),
    isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (email, password) => {
        dispatch(login(email, password))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);