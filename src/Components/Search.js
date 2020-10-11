import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue:'',
            userObj:{}
        }
    }
    getEditUserInfo =(info) =>{
        this.setState({
            userObj:info
        });
        this.props.getEditUserInfoForApp(info);
    }
    isShowEditForm = () => {
        if(this.props.editUserStatus === true){
            return (<EditUser
                getEditUserInfo={(info)=>this.getEditUserInfo(info)}
                editUserObject={this.props.editUserObject}
                changeEditUserStatus={()=>this.props.changeEditUserStatus()}
             /> )
        }
    }
    isChange = (event) => {
        this.setState({
            tempValue:event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue)
    }
    displayButton = ()=>{
        if(this.props.displayForm === true){
            return   <div className="btn btn-outline-primary btn-block " onClick={()=>this.props.changeState()} >Close</div>
        } else {
            return   <div className="btn btn-outline-primary btn-block" onClick={()=>this.props.changeState()}>Add User</div>
        }
    }
 
    render() {
        return (
            <div className ="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group btn-block">
                        <input type="text"  className="form-control"  onChange ={(event)=>this.isChange(event)} placeholder="Input name user" aria-describedby="helpId" />
                        <div className="btn btn-info" onClick ={() => this.props.checkConnectProps(this.state.tempValue)}>Search</div>
                    
                    </div>  
                </div>
                <div className="form-group">
                    <div className="btn-group1">
                        {this.displayButton( )}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Search;