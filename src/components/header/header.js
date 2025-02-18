import React from "react";
import "./headers.css";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
            <img src = "/images/logo.png" alt="candleleaf logo"></img>
            </div>
        <ul className="nav-links">
            <li><a href="#">Discovery <i class="down"></i></a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact us</a></li>

        </ul>
        <div className = "icons">
            <i className = "user">
                <img src = "/images/vector.png" alt="user icon"></img>
            </i>
            <i className = "shopping">
                <img src = "/images/shoppingcart.png" alt="shoppingcart"></img>
            </i>
        </div>
        </nav>
    )
    
}
export default Navbar;