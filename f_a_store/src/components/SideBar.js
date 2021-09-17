import React from 'react'
import "../styles/SideBarStyle.css"
import { SideBarData } from './SideBarData'
import logo from '../img/logo.png';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className ="logo"><img src={logo} alt="FA S-N-S Logo" /> French's Asylum</div>
            <a>Shop-n-Stuff</a>
            <ul className="SidebarList">
                {SideBarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname == val.link ?"active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}
                        >
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;