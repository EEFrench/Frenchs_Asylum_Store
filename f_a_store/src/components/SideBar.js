import React from 'react'
import "../styles/SideBarStyle.css"
import { SideBarData } from './SideBarData'

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SideBarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}
                        >
                            <div>{val.icon}</div>
                            <div>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;