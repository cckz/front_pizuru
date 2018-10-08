import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import { Layout } from 'antd';
import styled from "styled-components";

import  {Container} from './styledComponents'
import {routes} from "../routes";

const Sidebar = styled.div`
 width: 23%;
`

const SidebarUl = styled.ul`
  list-style: none;
  background: #333;
  padding: 1rem 0;
`

const SidebarLi = styled.li`    
    font-size: 15px;
    padding: 0.4rem 2rem;
    margin: 0;
`

const Body = styled.div`
  flex: 1;
  padding: 10px;
`

class Content extends Component {
  render() {
    const {Content} = Layout;
    return (
      <Container>
        <Router>
          <Content style = {{ padding: "2rem 0", display: "flex" }}>
            <Sidebar>
              <SidebarUl>
                <SidebarLi>
                    <NavLink to="/profile"
                             activeClassName="selected">
                        Аккаунт

                    </NavLink>
                </SidebarLi>
                <SidebarLi>
                    <NavLink to="/site"
                             activeClassName="selected">
                        Сайт
                    </NavLink>
                </SidebarLi>
                <SidebarLi>
                    <NavLink to="/workers"
                             activeClassName="selected">
                        Персонал
                    </NavLink>
                </SidebarLi>
                <SidebarLi>
                    <NavLink to="/notifications"
                             activeClassName="selected">
                        Оповещения
                    </NavLink>
                </SidebarLi>
                <SidebarLi>
                    <NavLink to="/support"
                             activeClassName="selected">
                        Поддежка
                    </NavLink>
                </SidebarLi>
              </SidebarUl>
            </Sidebar>
            <Body>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </Body>
          </Content>
        </Router>
      </Container>
    )
  }
}

export default Content;
