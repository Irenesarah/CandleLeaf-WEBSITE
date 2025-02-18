import React from "react";
import "./headers.css";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
            <img src = "/images/logo.png" alt="candleleaf logo"></img>
            </div>
<<<<<<< HEAD
        <ul className="nav-links">
=======
        <ul class="nav-links">
>>>>>>> 0e7bb88089f0bf9d8ff3a8f19e0a299c26853a97
            <li><a href="#">Discovery <i class="down"></i></a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact us</a></li>

        </ul>
<<<<<<< HEAD
        <div className = "icons">
            <i className = "user">
                <img src = "/images/vector.png" alt="user icon"></img>
            </i>
            <i className = "shopping">
=======
        <div class = "icons">
            <i class = "user">
                <img src = "/images/vector.png" alt="user icon"></img>
            </i>
            <i class = "shopping">
>>>>>>> 0e7bb88089f0bf9d8ff3a8f19e0a299c26853a97
                <img src = "/images/shoppingcart.png" alt="shoppingcart"></img>
            </i>
        </div>
        </nav>
    )
    
}
export default Navbar;