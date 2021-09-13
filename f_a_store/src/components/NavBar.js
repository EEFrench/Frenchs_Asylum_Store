import React from 'react'
import '../styles/styles.css'

function NavBar() {
    return (
        <div>
            <nav>
                <div className ="logo">FA Logo</div>
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
