import React from 'react'
import './Sidebar.css';
import LinsStyleIcon from '@mui/icons-material/LinsStyleIcon';
import TimelineIcon from '@mui/icons-material/TimelineIcon';
import TrendingUpIcon from '@mui/icons-material/TrendingUpIcon';


export default function Sidebar() {
  return (
    <>
        <div className="sidebar">
            <div className="sidebarMenu">
                <h4>Dashboard</h4>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <LinsStyleIcon />
                        Home
                    </li>
                    <li className="sidebarItem">
                        <TimelineIcon />
                    </li>
                    <li className="sidebarItem">
                        <TrendingUpIcon />
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}
