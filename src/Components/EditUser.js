import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserObject.id,
            name: this.props.editUserObject.name,
            phone: this.props.editUserObject.phone,
            permission: this.props.editUserObject.permission,
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    saveButton= () => {
        var info ={};
        info.id = this.state.id
        info.name = this.state.name
        info.phone = this.state.phone
        info.permission = this.state.permission
        this.props.getEditUserInfo(info);
        this.props.changeEditUserStatus();
    }
    render() {
        return (
            <div className="row">
                    <div className="col-12">
                        <form method="post">
                            <div className="card text-white bg-secondary border-primary mt-2 mb-3">
                                <div className="card-header text-center">
                                Edit User</div>
                                <div className="card-body text-primary">
                                <div className="form-group">
                                    <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.editUserObject.name} type="text" name="name"  className="form-control" placeholder="User name"  />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.editUserObject.phone} type="number" name="phone"  className="form-control" placeholder="Phone"  />
                                </div>
                                <div className="form-group" >
                                    <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.editUserObject.permission} className="custom-select" name="permission" required>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="button" className="btn btn-block btn-primary" 
                                        value="Save"
                                        onClick={()=>this.saveButton()}
                                    />
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
}

export default EditUser;