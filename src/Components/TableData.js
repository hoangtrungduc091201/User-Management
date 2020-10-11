import React, { Component } from 'react';
import TableDataRow from './TableDataRow'
class TableData extends Component {

    mappingDataUser =() => {
        return this.props.dataUser.map((value, key) => {
            return <TableDataRow
                    changeEditUserStatus={()=>this.props.changeEditUserStatus()}
                    editFunClick ={(user)=>this.props.editFun(value)}
                    key={key} sst={key}  name={value.name} phone={value.phone} permission = {value.permission} />
        })
    }
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-inverse ">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Permission</th>
                        <th>Manipulation</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;