import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";
import Sesion from "./Sesion";
import ColaTicket from "./ColaTicket";
import CreateTicket from "./CreateTicket";
import DestockTicket from "./DestockTicket";
import { UiContext } from "../context/UiContext";

const { Content, Footer, Sider } = Layout;

const RouterPages = () => {
  const { menu } = useContext(UiContext);
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth="0" breakpoint="md" hidden={menu}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to={"/ingresar"}>Ingresar</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to={"/cola"}>Cola de Tickets</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              <Link to={"/crear"}>Crear Tickets</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout ">
          <Content
            style={{
              margin: "24 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                <Route path="/ingresar" component={Sesion} />
                <Route path="/cola" component={ColaTicket} />
                <Route path="/crear" component={CreateTicket} />

                <Route path="/escritorio" component={DestockTicket} />
                <Redirect to="ingresar" />
              </Switch>
            </div>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default RouterPages;
