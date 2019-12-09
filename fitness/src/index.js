import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import App from "./App"
import {mainRoutes} from "./routes"
ReactDOM.render(<Router>
    <Switch>
        <Route path="/admin" render={(routerProps)=><App {...routerProps}/>}/>
        {
            mainRoutes.map(item=>{
                return <Route key={item.pathname} path={item.pathname} component={item.component}/>
            })
        }
        <Redirect to="/admin" from="/" exact/>
    </Switch>
</Router>,document.getElementById("root"))