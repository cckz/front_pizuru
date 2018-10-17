import React, {Component} from "react";
import {Container} from './styledComponents'
import styled from "styled-components";
import { Divider } from 'antd';

import AntLoginForm from './forms/Login'
import operator from './img/operator.png'
import fb from './img/fb.svg'
import google from './img/google.svg'

const BackroundContent = styled.div`
    background: #f7f7f7;
`

const LoginPageWrap = styled.div`    
    display: flex;
    height: 590px;    
    justify-content: space-between;    
    align-items: center;
`

const LoginPageImgWrap = styled.div`
    width: 433px;
    text-align: center;
`

const Img = styled.img`
    height: 250px;
    margin: 1rem 0;
`

const WrapLoginForm = styled.div`
    width: 312px;
    padding: 1rem 0;
    border-radius: 3px;
    border: 1px solid #333;
    margin: 1rem 0;
`

const TitleForm = styled.div`
    font-size: 20px;
    color: #333;
    text-align: center;
    text-transform: uppercase;
    padding: 1rem;
`

const WrapLinks = styled.div`
    display: flex;
    justify-content: center;
`

const SocialAuth = styled.a`
    width: 36%;
    margin: 0 1rem;
    border-radius: 3px;    
    padding: 0.85em 1em;
    align-items: center;
    justify-content: center;
    display: flex;
    transition: background-color 0.25s ease-out,color 0.25s ease-out;    
`

const FacebookAuth = styled(SocialAuth)`
    background-color: #2d4485;
    &:hover {
        background: #4b5d92;
    }
`

const GoogleAuth = styled(SocialAuth)`
    background-color: #c33333;
    &:hover {
        background: #b56767;
    }
`

const SocialAuthImg = styled.img`
    width: 18px;
    margin: 0 auto;
`

const SingUpAndReset = styled.a`
    margin: auto;    
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
    &:hover {
        color: #333;
    }
`

class LoginPage extends Component {
    render() {
        return (
            <BackroundContent>
                <Container>
                    <LoginPageWrap>
                        <LoginPageImgWrap>
                            <Img src={operator} />
                        </LoginPageImgWrap>
                        <WrapLoginForm>
                            <TitleForm>Вход</TitleForm>
                            <AntLoginForm {...this.props} />
                            <Divider style = {{
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                color: "#cacaca",
                                fontWeight: "300"
                                }}>Или
                            </Divider>
                            <WrapLinks>
                                <FacebookAuth>
                                    <SocialAuthImg src={fb} />
                                </FacebookAuth>
                                <GoogleAuth>
                                    <SocialAuthImg src={google} />
                                </GoogleAuth>
                            </WrapLinks>
                            <Divider />
                            <WrapLinks>
                                <SingUpAndReset>Регистрация</SingUpAndReset>
                                <SingUpAndReset>Забыли пароль?</SingUpAndReset>
                            </WrapLinks>
                        </WrapLoginForm>
                    </LoginPageWrap>
                </Container>
            </BackroundContent>
        )
    }
}

export default LoginPage;