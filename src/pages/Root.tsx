import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import logo from "../assets/logo.svg";
import { items } from "../configs/arrays";
import Home from "./home";
import MyTeams from "./myTeams";
import Profile from "./profile";
import "./Root.scss";

const { Sider } = Layout;

const Root: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo">
          <img src={logo} alt="logo" />
          <h4 style={{ color: "white" }}>Lorem ipsum</h4>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(e: any) => navigate(`${e.key}`)}
        />
      </Sider>

      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            {useRoutes([
              {
                path: "/",
                element: <Home />,
              },
              {
                path: "my-teams",
                element: <MyTeams />,
              },
              {
                path: "profile/:id",
                element: <Profile />,
              },
            ])}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Root;
