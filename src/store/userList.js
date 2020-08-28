import {observable,action} from "mobx"

class UserList {
     @observable name;
     constructor(){
          this.name ="查看时间"
     }
     @action
     async setName(data){
          this.name=data
     }
}

export default new UserList()