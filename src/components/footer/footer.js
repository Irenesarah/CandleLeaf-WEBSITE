import React from "react";
import "../footer/footer.css";

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer-details">
        <div className="footer-logo">
        <img className="image" src="../images/footerlogo.png.png" alt="Logo" />
        <p>Your natural candle made for your home and for your wellness.</p>
        </div>
        <div className="footer-links">
        <div className="footer-column">
                        <h3>Discovery</h3>
                        <ul>
                            <li>New season</li>
                            <li>Most searched</li>
                            <li>Most selled</li>
                        </ul>
                        </div>
                        <div className="footer-column">
                        <h3>About</h3>
                        <ul>
                            <li>Help</li>
                            <li>Shipping</li>
                            <li>Affiliate</li>
                        </ul>
                        </div>
                        <div className="footer-column">

                        <h3>Info</h3>
                        <ul>
                            <li>Contact us</li>
                            <li>Privacy Policies</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    </div>
                    </div>

        </div>
        );
        };
export default Footer;

