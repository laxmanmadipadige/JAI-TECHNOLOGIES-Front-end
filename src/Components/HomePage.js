// Import React library
import React from 'react';
import { scroller } from 'react-scroll';
// Import the CSS file for styling
import '../assets/styles/HomePage.css';
// Import the image asset
import HomePage from '../assets/Images/HomePage.avif';
// Define the Hero component
const Content = () => {
    return (
        <div className="hero-section">
            {/* Text Content Section */}
            <div className="hero-content">
                <h2>Seek wisdom, spark conversation, <br /> or simply discover a novel perspective.</h2>
                <p>
                    Discover unparalleled sophistication and innovation with Jai Technologies, your premier destination for AI-powered products and services. 
                    As a dynamic leader in the industry, Jai embodies the essence of Just AI, redefining the landscape of artificial intelligence.
                </p>
                
                {/* Buttons Section */}
                <div className="hero-buttons">
                    {/* Scroll to products section smoothly */}
                    <button onClick={() => scroller.scrollTo("productCard", { smooth: true })} className="button"> Products</button>
                    
                    {/* Navigate to the solutions page */}
                    <button onClick={() => scroller.scrollTo("serviceCard", { smooth: true })} className="button"> Services</button>

                </div>
            </div>

            {/* Image Section with Diagonal Cut */}
            <div className="hero-image">
                <img src={HomePage} alt="Office Environment" />
            </div>
        </div>
    );
};

// Export the Hero component to be used in other files (e.g., App.js)
export default Content;
