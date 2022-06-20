import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import logo from "../assets/logo.svg";
import { items } from "../configs/arrays";
import Home from "./home";
import "./Root.scss";

const { Sider } = Layout;

const Root: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
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
      <Layout className="site-layout">
        {useRoutes([
          {
            path: "/",
            element: <Home />,
          },
        ])}
      </Layout>
    </Layout>
  );
};

export default Root;
