import React from 'react'
import { Layout, Icon } from 'antd'
import { Route } from 'react-router-dom'

import AppMenu from '../components/menu'

const { Header, Content } = Layout

const DashBoard = () => {

  return (
    <Layout style={{ height: '100%' }}>
      <AppMenu />
      <Layout>
        <Header style={{ background: "#fff", padding: "0" }}>
          <Icon
            className="trigger"
            type="menu-unfold"
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280
          }}
        >
        <Route path='/' exact component={} />
        </Content>
      </Layout>
    </Layout>
  )
}

export default DashBoard