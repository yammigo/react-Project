import React from "react"
import { inject, observer } from "mobx-react"
@inject("UserListStore")
@observer 
class Home extends React.Component{
    
    constructor(props){
        super(props);
    }
    setName=()=>{
       let {UserListStore} = this.props
        UserListStore.setName(new Date().toLocaleString())
    }
     render() {
        let {UserListStore} = this.props
         return (<button onClick={this.setName}>{UserListStore.name}</button>)
     }
}

export default Home