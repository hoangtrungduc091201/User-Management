import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.permission === 1){
            return 'Admin'
        }else if(this.props.permission === 2){
            return 'Moderator'
        } else return 'Normal'
    }
    render() {
        return (
                    <tr>
                        <td >{this.props.id}</td>
                        <td>{this.props.name}</td>
                        <td>{this.props.phone}</td>
                        <td>{this.permissionShow()}</td>
                        <td>
                        <div className="btn btn-warning edit"><i className="fa fa-edit">Edit</i></div>
                        <div className="btn btn-danger remove"><i className="fa fa-edit">Remove</i></div>
                        </td>
                    </tr>
        );
    }
}

export default TableDataRow;