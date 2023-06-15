import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


const New = ({ inputs, title }) => {
  const [file,setFile] = useState('');
  return (
    <div  className='new'>
    <Sidebar/>
    <div className="newContainer">
      <Navbar/>
      <div className="top">
        <h1 className="title">Add New User</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
           src={file? URL.createObjectURL(file): "https://t4.ftcdn.net/jpg/03/08/68/19/240_F_308681935_VSuCNvhuif2A8JknPiocgGR2Ag7D1ZqN.jpg"}
           alt="img"
         />
        </div>
        <div className="right">
          <form action="">
          <div className="formInput">
              <label htmlFor="file">Image: <DriveFolderUploadIcon className='icon'/></label>
              <input id='file' type="file" onChange={(e)=>setFile(e.target.files[0])} style={{ display: "none" }} />
            </div>
            {
              inputs.map((input)=>{
                return (
                  <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
                )
              })
            }
            {/* <div className="formInput">
              <label htmlFor="">Username</label>
              <input type="text" placeholder='abhinay chaturvedi' />
            </div> */}
            {/* <div className="formInput">
              <label htmlFor="">Name and Surname</label>
              <input type="text" placeholder='abhinay chaturvedi' />
            </div>
            <div className="formInput">
              <label htmlFor="">Email</label>
              <input type="email" placeholder='abhinaychaturvedi@gmail.com' />
            </div>
            <div className="formInput">
              <label htmlFor="">Phone</label>
              <input type="text" placeholder='+91 56465465441' />
            </div>
            <div className="formInput">
              <label htmlFor="">Password</label>
              <input type="password"  />
            </div>
            <div className="formInput">
              <label htmlFor="">Address</label>
              <input type="text" placeholder='vill-fatanpur' />
            </div>
            <div className="formInput">
              <label htmlFor="">Country</label>
              <input type="text" placeholder='e.g. india' />
            </div> */}
            <button>send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default New