import React, { useState, Fragment } from "react";
import { Layout, Menu, Icon } from "antd";

import "./style/index.styl";

const { Sider, Header } = Layout;
const { Item } = Menu;

const AppMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Item key="1">
          <Icon type="user" />
          <span>nav1</span>
        </Item>
        <Item key="2">
          <Icon type="user" />
          <span>nav2</span>
        </Item>
        <Item key="3">
          <Icon type="user" />
          <span>nav3</span>
        </Item>
      </Menu>
    </Sider>
  );
};

export default AppMenu;
