import React from "react";
import "../Benefits/Benefits.css";

const Benefits = () => {
    return (
        <div className="benefits">
            
            <div className="benefits-text">
                <div className="benefits-heading">
                    <h1>Clean and fragrant soy wax</h1>
                    <h2>Made for your home and for your wellness</h2>
                </div>

                <ul className="benefits-list">
                    <li>✔ <strong>Eco-sustainable:</strong> All recyclable materials, 0% CO₂ emissions</li>
                    <li>✔ <strong>Hypoallergenic:</strong> 100% natural, human-friendly ingredients</li>
                    <li>✔ <strong>Handmade:</strong> All candles are craftly made with love.</li>
                    <li>✔ <strong>Long burning:</strong> No more waste. Created to last long.</li>
                </ul>

                <button className="learn-more-btn">Learn More</button>
            </div>

            
            <div className="benefits-image">
                <img src="/images/Candles.png" alt="Candles" />
            </div>
        </div>
    );
};

export default Benefits;
