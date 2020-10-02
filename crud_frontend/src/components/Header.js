import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

class Headers extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <NavLink to="/" className="nav-link">
                React CRUD & Routing
              </NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">{this.props.children}</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Prueba CRUD Kevin Márquez
        </Footer>
      </Layout>
    );
  }
}

export default Headers;
