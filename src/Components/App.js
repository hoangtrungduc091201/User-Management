import React,{ Component} from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data.json'
import { v4 as uuidv4 } from 'uuid';
class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      displayForm:false,
      dataUser:DataUser,
      searchText:'',
      editUserStatus:false,
      editUserObject:{}
    }
  }
  changeEditUserStatus= () =>{
    this.setState({
      editUserStatus:!this.state.editUserStatus
    });
  }
  editUser = (user) => {
    this.setState({
      editUserObject:user
    });
    console.log(user);
  }
  getNewUserData = (name,phone,permission)=>{
       var item ={};
        item.id =uuidv4();
        item.name =name;
        item.phone =phone;
        item.permission =permission;
        var items= this.state.dataUser;
        items.push(item);
        this.setState({
          dataUser:items
        });
        console.log(this.state.dataUser)
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    });
  }
  changeState = ()=>{
    this.setState({
      displayForm:!this.state.displayForm
    });
  }
  getEditUserInfoForApp =(info) => {
    // console.log(info)
    this.state.dataUser.forEach((value , key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.phone = info.phone;
        value.permission= info.permission;
      }
    } )
  }
  render() {
    const res =[];
    this.state.dataUser.forEach((user) => {
      if(user.name.indexOf(this.state.searchText) !== -1){
        res.push(user)
      }
    })
    // console.log(res)
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                      getEditUserInfoForApp= {(info) => this.getEditUserInfoForApp(info)}
                      checkConnectProps = {(dl) => this.getTextSearch(dl)}
                      changeState={() =>this.changeState()}
                      displayForm={this.state.displayForm}
                      editUserStatus={this.state.editUserStatus}
                      editUserObject={this.state.editUserObject}
                      changeEditUserStatus={()=>this.changeEditUserStatus()}
               />  
              <div className="col-12"><hr/></div>
              <TableData
                changeEditUserStatus={()=>this.changeEditUserStatus()}
                editFun={(user) => this.editUser(user)}
                dataUser={res}/>
              <AddUser 
                  addUser={(name,phone,permission) => this.getNewUserData(name,phone,permission)}
                   displayForm={this.state.displayForm}>
               </AddUser>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
