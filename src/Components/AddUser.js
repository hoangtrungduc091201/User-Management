import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            phone:'',
            permission:''
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
        // var item ={};
        // item.id =this.state.id;
        // item.name =this.state.name;
        // item.phone =this.state.phone;
        // item.permission =this.state.permission;
        // console.log(item);
    }
    checkState = ()=>{
        if(this.props.displayForm ===true){
            return (
            <div className="col">
                <form method="post">
                <div className="card border-primary mt-2 mb-3">
                    <div className="card-header">
                    Add New User</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <input type="text" name="name" onChange={(event) => this.isChange(event)}  className="form-control" placeholder="User name"  />
                    </div>
                    <div className="form-group">
                        <input type="number" name="phone" onChange={(event) => this.isChange(event)}  className="form-control" placeholder="Phone"  />
                    </div>
                    <div className="form-group" >
                        <select  className="custom-select" name="permission" onChange={(event) => this.isChange(event)} required>
                        <option value={1}>Admin</option>
                        <option value={2}>Modrator</option>
                        <option value={3}>Normal</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="reset" className="btn btn-block btn-primary" 
                            onClick={(name,phone,permission) => this.props.addUser(this.state.name,this.state.phone,this.state.permission)} 
                            value="Add"
                        />
                    </div>
                    </div>
                </div>
                </form>
            </div>
            )
        }
    }
   
    render() {
        // console.log(this.state)
        return (
          
                <div >
                    {/* {this.displayButton()} */}
                        {this.checkState()}
                </div>
         
            
        );
    }
}

export default AddUser;