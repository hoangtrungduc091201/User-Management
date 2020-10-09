import React,{ Component} from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data.json'
class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      displayForm:false,
      dataUser:DataUser,
      searchText:''
    }
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
  render() {
    const res =[];
    this.state.dataUser.forEach((user) => {
      if(user.name.indexOf(this.state.searchText) !== -1){
        res.push(user)
      }
    })
    console.log(res)
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
              checkConnectProps = {(dl) => this.getTextSearch(dl)}
              changeState={() =>this.changeState()} displayForm={this.state.displayForm}/>
              <div className="col-12"><hr/></div>
              <TableData dataUser={res}/>
              <AddUser displayForm={this.state.displayForm}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
