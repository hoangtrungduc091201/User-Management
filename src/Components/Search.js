import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue:''
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
            <div>
                <div className="form-group">
                    <div className="class-btn-group d-flex">
                        <input type="text"  className="form-control"  onChange ={(event)=>this.isChange(event)} placeholder="Input name user" aria-describedby="helpId" />
                        <div className="btn btn-info" onClick ={() => this.props.checkConnectProps(this.state.tempValue)}>Search</div>
                    
                    </div>  
                </div>
                <div className="btn-group1">
                    {this.displayButton( )}
                </div>
            </div>
        );
    }
}

export default Search;