import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css'
import "../../assets/css/admin/admin.css"
import {withRouter} from "react-router-dom"
import {adminRoutes} from "../../routes"
const { Header, Content, Sider } = Layout;
const menus = adminRoutes.filter(item=>item.isNav === true)
class Frame extends Component {
    handleClick=(item)=>{
        this.props.history.push( item.key )
     }
     render() {
         console.log(this.props)
         return (
             <Layout>
                 <Header className="header">
                     <div className="admin-title">
                         <h1>html5-1919后台管理系统</h1>
                         <p>快来玩呀~</p>
                     </div>
                 </Header>
                 <Layout>
                     <Sider width={200} style={{ background: '#fff' }}>
                         <Menu
                             mode="inline"
                             defaultSelectedKeys={[this.props.location.pathname]}
                             defaultOpenKeys={['sub1']}
                             style={{ height: '100%', borderRight: 0 }}
                         >
                             {
                                 menus.map(item=>{
                                     return <Menu.Item 
                                     onClick={this.handleClick} 
                                     key={item.pathname}
                                     ><Icon type={item.icon} />{item.title}</Menu.Item>
                                 })
                             }
                         </Menu>
                     </Sider>
                     <Layout style={{ padding: '0 24px 24px' }}>
                         <Content
                             style={{
                                 background: '#fff',
                                 padding: 24,
                                 marginTop: 24,
                                 height: "auto",
                             }}
                         >
                             {this.props.children}
                         </Content>
                     </Layout>
                 </Layout>
             </Layout>
         )
     }
}

export default withRouter(Frame);