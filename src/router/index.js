import React from "react"
import {Route,HashRouter,Link,Switch,Redirect} from "react-router-dom"
import Home from "../pages/home"
import about from "../pages/about"
class AppRouter extends React.Component{
    render(){
        return (
            <HashRouter>
               <ul>
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                </ul>
                <div>
                    {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
                   
                    <Switch>
                        {/* exact */}
                       
                        <Route path="/home" component={Home} />
                        <Route exact path="/about" component={about}/>
                        <Redirect to="/home"/>
                       
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}
export default AppRouter