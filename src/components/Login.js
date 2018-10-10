import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import LoginForm from './LoginForm'
import {login} from '../actions/auth'
import {authErrors, isAuthenticated} from '../reducers/index'
import { Layout } from 'antd';

import Header from './Header'
import Footer from './Footer'

const Login = (props) => {
    if (props.isAuthenticated) {
        return (
            <Redirect to='/'/>
        )
    } else {
        return (
            <Layout className="layout">
                <Header />
                <div className="login-page">
                    <LoginForm {...props} />
                </div>
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
    onSubmit: (username, password) => {
        dispatch(login(username, password))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);