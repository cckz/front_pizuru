import React, { Component } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { history } from '../history'

import instagram from './img/instagram.png'
import fb from './img/fb.png'
import yt from './img/yt.png'
import user from './img/user.png'

import { Container } from './styledComponents'
import { logout } from "../actions/auth";
import { connect } from 'react-redux'
import {isAuthenticated} from "../reducers";


const Social = styled.a`
   text-decoration: none;
   margin-right: 0.5rem;
`

const SocialImg = styled.img`
   width: 1.5rem;
`

const Title = styled.div`
    font-size: 0.9rem;
    line-height: 1;
    text-transform: uppercase;
    margin-left: auto;
    color: #0a0a0a;
`

const Login = styled.div`
    text-transform: uppercase;
    margin-left: auto;
`

const LoginA = styled.a`
     text-decoration: none;
     font-size: 0.7rem;
     position: relative;
     top: -1px;
     color: #000;
`

const LoginImg = styled.img`
     height: 0.8rem;
     position: relative;
     top: 2px;
     margin-right: 0.1rem;
`

const LoginSpan = styled.span`
     opacity: 0.5;
     letter-spacing: 0.1rem;
`

const LoginEmpty = styled.div`
    margin-left: auto;
    width: 8%;
`

class Header extends Component {
    handleClickLogout = () => {
        console.log(localStorage)
        localStorage.removeItem('persist:polls')
        history.push('/login')
    }

    render() {
        const {Header} = Layout;
        const {handleClickLogout, isAuthenticated} = this.props
        console.log(this.props)
        return (
            <Container>
                <Header className="top">
                    <div>
                        <Social href="https://instagram.com" target="_blank" rel="noopener">
                            <SocialImg src={instagram} />
                        </Social>
                        <Social href="https://instagram.com" target="_blank" rel="noopener">
                            <SocialImg src={fb} />
                        </Social>
                        <Social href="https://instagram.com" target="_blank" rel="noopener">
                            <SocialImg src={yt} />
                        </Social>
                    </div>
                    <Title>pizu.ru</Title>
                    {isAuthenticated ?
                        <Login>
                            <LoginA onClick = {handleClickLogout}>
                                <LoginImg src={user} />
                                <LoginSpan>Выход</LoginSpan>
                            </LoginA>
                        </Login>
                            :
                        <LoginEmpty />
                    }
                </Header>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
    handleClickLogout: () => {
        dispatch(logout())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);


