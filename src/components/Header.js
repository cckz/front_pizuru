import React, { Component } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import './style.css'

import instagram from './img/instagram.png'
import fb from './img/fb.png'
import yt from './img/yt.png'
import user from './img/user.png'

import {Container} from './styledComponents'

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

class Header extends Component {
    render() {
        const {Header} = Layout;

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
                    <Login>
                        <LoginA href="/account/logout/">
                            <LoginImg src={user} />
                            <LoginSpan>Выход</LoginSpan>
                        </LoginA>
                    </Login>
                </Header>
            </Container>
        )
    }
}

export default Header;

