import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import { darkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
    const { dispatch } = useContext(darkModeContext);
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to='/' style={{textDecoration:"none"}}>
            <span className="logo">chaturvedi</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link to='/users' style={{textDecoration:"none"}}>
                <li>
                    <PersonOutlineOutlinedIcon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to='/products' style={{textDecoration:"none"}}>
                <li>
                    <Inventory2OutlinedIcon className='icon'/>
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <FilterFramesOutlinedIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFULL</p>
                <li>
                    <QueryStatsOutlinedIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsOutlinedIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyAltOutlinedIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOptions" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar