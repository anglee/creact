import React from "react";
import "./Header.less";
import { Col, Row, Menu } from "antd";
import { Link } from "react-router-dom";

const Header = () => (
  <Row>
    <Col xxl={4} xl={5} lg={5} md={6} sm={24} xs={24}>
      <Link to={"/"} id="logo">
        <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
        <img
          alt="Ant Design"
          src="https://gw.alipayobjects.com/zos/rmsportal/DkKNubTaaVsKURhcVGkh.svg"
        />
      </Link>
    </Col>
    <Col xxl={20} xl={19} lg={19} md={18} sm={0} xs={0}>
      <Menu className="menu-site" mode="horizontal" id="nav" key="nav">
        <Menu.Item key="home">
          <Link to={"/pricing"}>Pricing</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to={"/contact"}>Contact</Link>
        </Menu.Item>
        <Menu.Item key="register">
          <Link to={"register"}>Register</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to={"register"}>Login</Link>
        </Menu.Item>
      </Menu>
    </Col>
  </Row>
);

export default Header;
