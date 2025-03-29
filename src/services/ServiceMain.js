
import React from "react";
import '../assets/styles/ServiceMain.css'
import office from '../assets/Images/photography-group-marketing-experts-background.jpg'
import { Link } from 'react-router-dom';
const Solutions = () => {
  return (
    <>
    <div className="services-container">
      {/* Section 1: Services Header */}
      <div className="services-header">
        <h2>Services</h2>
        <p className="services-subtitle">
          Take your company to new heights by investing in our reliable and efficient technology solutions.
        </p>
      </div>

      {/* Section 2: Image */}
      <div className="services-image">
        <img src={office}
          alt="Office Workspace"
        />
      </div>

      {/* Section 3: Description */}
      <div className="services-description">
        <p>
          Jai Technologies is your trusted partner for IT management, data security, and cloud technology with one goal in mind:
          to transform the way your business works in order to save you time and money.
        </p>
      </div>

      {/* New Section: Comprehensive IT Services */}
      <div className="comprehensive-it">
        <div className="comprehensive-content">
          <h2>Comprehensive IT services for businesses</h2>
          <div className="comprehensive-text">
            <p>
              When we say comprehensive, we mean comprehensive. Jai Technologies has the experience and expertise to provide an
              excellent experience across spheres, for truly holistic IT.
            </p>
            <p>
              Some MSPs struggle to offer consulting or network services. But your organization needs the entire experience to stop worrying
              about IT. Learn more about our services below.
            </p>
          </div>
        </div>
        
      </div>
      
      
    </div>
    <div className="better-together">
                <div className="content">
                    <h2>Why choose services from Jai Technologies?</h2>
                    <h4>Jai Technologies services provide businesses with an edge over the competition with a variety of benefits. Opting for outsourced IT services improve the efficiency of business and build trust with customers and clients. Our services can be tailored to meet specific needs to match your specific goals.</h4>
                    <div className="buttons">
                    <Link to="/contactus" className="button secondary">Get in touch</Link>
                    </div>
                </div>

                <div className="image-container">
                    <img src={office} alt="Alt description" />
                </div>
                
            </div>
    </>
  );
};

export default Solutions;
