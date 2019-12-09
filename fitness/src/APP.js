import React, {Component} from "react"
import {Route,Switch,Redirect} from "react-router-dom"
import Frame from "./components/Frame"
import {adminRoutes} from "./routes"
class App extends Component{
    render(){
        return(
            <Frame>
                <Switch>
                    {
                        adminRoutes.map(item=>{
                            return <Route key={item.pathname} path={item.pathname} render={(routerProps)=><item.component {...routerProps}/>}/>
                        })
                    }
                    <Redirect to={adminRoutes[0].pathname} from="/admin" exact/>
                </Switch>
            </Frame>
        )
    }
}
export default App