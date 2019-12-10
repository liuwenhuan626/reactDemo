import React, {Component} from "react"
import {Route,Switch,Redirect} from "react-router-dom"
import Frame from "./components/Frame"
import {adminRoutes} from "./routes"
class App extends Component{
    render(){
        console.log(adminRoutes);
        return(
            <Frame>
                <Switch>
                    {
                        adminRoutes.map(item=>{
                            return <Route key={item.pathname} path={item.pathname} render={(routerProps)=><item.component {...routerProps} exact/>}/>
                        })
                    }
                    <Redirect to={adminRoutes[0].pathname} from="/admin" exact/>
                    <Redirect to="/404"/>
                </Switch>
            </Frame>
        )
    }
}
export default App