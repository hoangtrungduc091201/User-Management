import React, { Component } from 'react';

class AddUser extends Component {
    
    checkState = ()=>{
        if(this.props.displayForm ===true){
            return (
            <div className="col">
                <div className="card border-primary mt-2 mb-3">
                    <div className="card-header">
                    Add New User</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <input type="text"  className="form-control" placeholder="User name"  />
                    </div>
                    <div className="form-group">
                        <input type="text"  className="form-control" placeholder="Phone"  />
                    </div>
                    <div className="form-group">
                        <select  className="custom-select" required>
                        <option value={1}>Admin</option>
                        <option value={2}>Modrator</option>
                        <option value={3}>Normal</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <div className="btn btn-block btn-primary">Add</div>
                    </div>
                    </div>
                </div>
            </div>
            )
        }
    }
   
    render() {
        return (
          
                <div >
                    {/* {this.displayButton()} */}
                        {this.checkState()}
                </div>
         
            
        );
    }
}

export default AddUser;