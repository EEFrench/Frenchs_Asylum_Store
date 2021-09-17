import React from 'react'
import '../styles/NavBarStyle.css'
import logo from '../img/logo.png';

function NavBar() {
    return (
        <div>
            <nav>
                <div className ="logo"><img src={logo} alt="FA S-N-S Logo" /> French's Asylum  Shop-n-Stuff</div>
                <ul className ="nav-links">
                    <li><a>Home</a></li>
                    <li><a>Products</a></li>
                    <li><a>Services</a></li>
                    <li><a>About</a></li>
                    <li><a>Cart</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
