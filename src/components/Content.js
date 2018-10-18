import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import { Layout } from 'antd';
import styled from "styled-components";
import { connect } from 'react-redux'

import {userId} from "../reducers";
import {requestProfile} from "../actions/auth";

import {Container} from './styledComponents'
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
  margin: 0 2rem;
`

class Content extends Component {

    componentWillMount() {
        const { user_id, fetchProfile } = this.props
        fetchProfile(user_id)
    }

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



const mapStateToProps = (state) => ({
    user_id: userId(state),
})

const mapDispatchToProps = (dispatch) => ({
    fetchProfile: (id) => {
        dispatch(requestProfile(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Content);
