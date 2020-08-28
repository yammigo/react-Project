import React from 'react'
import ReactDom from 'react-dom'
import AppRouter from "./router"
import { Provider } from "mobx-react"
import store from "./store"
class App extends React.Component {
    render(){
        return (
           <Provider {...store}>
               <AppRouter/>
           </Provider>
                 
          
        )
    }
}
ReactDom.render(<App/>,document.getElementById("app"))