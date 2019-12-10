import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css'
import "../../assets/css/admin/admin.css"
import { withRouter } from "react-router-dom"
import { adminRoutes } from "../../routes"
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const menus = adminRoutes.filter(item => item.isNav === true)
class Frame extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    handleClick = (item) => {
        this.props.history.push(item.key)
    }
    render() {
        console.log(this.props)
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {
                            menus.map(item => {
                                return <Menu.Item
                                    onClick={this.handleClick}
                                    key={item.pathname}
                                ><Icon type={item.icon} /><span>{item.title}</span></Menu.Item>
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {this.props.children}
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{this.props.children}</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(Frame);