import React from 'react';
import '../assets/styles/ProServCard.css';
import { Element } from 'react-scroll';

// Products Component
const Products = () => {
  return (
    // Element from react-scroll to allow smooth scrolling to this section
    <Element name="productCard">
      <div className="products-container">
        
        {/* Header Section */}
        <h1 className="products-header">Products</h1>

        {/* Products Grid Section */}
        <div className="products-grid">
          
          {/* Product 1: CogniTip */}
          <div className="product-card">
            <h3>CogniTip</h3>
            <p>
              Your gateway to a treasure trove of AI-generated tips inspired by a myriad of life experiences and personalities. 
              Embark on a journey of self-improvement and discovery as our cutting-edge technology harnesses the wisdom of diverse 
              perspectives to offer tailored advice just for you.
            </p>
            <a href="CogniTip" className="learn-more">Learn more</a> {/* Link to more details */}
          </div>

          {/* Product 2: CogniQuotes */}
          <div className="product-card">
            <h3>CogniQuotes</h3>
            <p>
              Seek wisdom, spark conversation, or simply discover a novel perspective. Our AI-powered quote generator taps into a 
              vast well of knowledge and diverse personalities to craft original, thought-provoking quotes that capture the essence 
              of any situation.
            </p>
            <a href="CogniQuotes" className="learn-more">Learn more</a> {/* Link to more details */}
          </div>

          {/* Product 3: CogniStar */}
          <div className="product-card">
            <h3>CogniStar</h3>
            <p>
              Transform your event into a star-studded affair with our Star Experience. From iconic musicians to beloved actors, bring 
              your favorite personalities to life in stunning forms. Elevate your celebration with unforgettable moments and create 
              memories that shine brightly.
            </p>
            <a href="#learn-more" className="learn-more">Learn more</a> {/* Link to more details */}
          </div>

          <div className="product-card">
            <h3>CogniPoc</h3>
            <p>
              Transform your event into a star-studded affair with our Star Experience. From iconic musicians to beloved actors, bring 
              your favorite personalities to life in stunning forms. Elevate your celebration with unforgettable moments and create 
              memories that shine brightly.
            </p>
            <a href="#learn-more" className="learn-more">Learn more</a> {/* Link to more details */}
          </div>

          <div className="product-card">
            <h3>CogniFin</h3>
            <p>
              Transform your event into a star-studded affair with our Star Experience. From iconic musicians to beloved actors, bring 
              your favorite personalities to life in stunning forms. Elevate your celebration with unforgettable moments and create 
              memories that shine brightly.
            </p>
            <a href="#learn-more" className="learn-more">Learn more</a> {/* Link to more details */}
          </div>
        </div>
      </div>
    </Element>
  );
};

// Export the component for use in other parts of the app
export default Products;
