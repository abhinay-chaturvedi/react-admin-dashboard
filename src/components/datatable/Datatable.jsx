import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss'
import { userRows, userColumns } from '../../datatablesource';
import { Link } from 'react-router-dom';

const Datatable = () => {
    const actionColumn = [
        { field: "action",
          headerName: "Action",
          width: 200,
          renderCell: ()=>{
            return (
                <div className="cellAction">
                  <Link to='/users/single' style={{textDecoration:"none"}}>
                    <div className="viewButton">view</div>
                  </Link>
                    <div className="deleteButton">delete</div>
                </div>
            )
          } 
        }
    ]
  return (
        <div className='datatable'>
          <div className="datatableTitle">
            Add New User
            <Link to='/users/new' style={{textDecoration:"none"}} className='link'>
              Add New
            </Link>
          </div>
          <DataGrid className='dataGrid'
             rows={userRows}
             columns={userColumns.concat(actionColumn)}
             initialState={{
               pagination: {
                 paginationModel: { page: 0, pageSize: 10 },
               },
             }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
           />
        </div>
  )
}

export default Datatable