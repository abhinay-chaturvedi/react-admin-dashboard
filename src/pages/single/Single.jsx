import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './single.scss'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'
const Single = () => {
  return (
    <div  className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
               <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnckv8o1OKbtMj_dIJ6k5_0b4Sp_TUhOV0JZ7Q-MHN&s"
                alt="" 
                className='itemImg'
               />
               <div className="details">
                <h1 className="itemTitle">Chaturvedi</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Chaturvedi@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">54687164</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">vill: fatanpur, dist: farrukhabad, state: up</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">INDIA</span>
                </div>
               </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3.5/1} title = "User Spending ( Last 6 Months )"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Latest Transaction</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single