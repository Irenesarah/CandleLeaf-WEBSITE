import React from "react";
import "./headers.css";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
            <img src = "/images/logo.png" alt="candleleaf logo"></img>
            </div>
        <ul class="nav-links">
            <li>Discovery <i class="down"></i></li>
            <li>About</li>
            <li>Contact us</li>

        </ul>
        <div class = "icons">
            <i class = "user">
                <img src = "/images/vector.png" alt="user icon"></img>
            </i>
            <i class = "shopping">
                <img src = "/images/shoppingcart.png" alt="shoppingcart"></img>
            </i>
        </div>
        </nav>
    )
    
}
export default Navbar;