import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // ✅ Import icons for menu toggle
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation hook for routing
import JaiTechnologies from '../assets/Images/JaiLogo.jpeg'; // ✅ Import logo image
import '../assets/styles/Header.css'; // ✅ Import CSS styles

const Navbar = () => {
    // 🔹 State for tracking dropdown visibility
    const [activeDropdown, setActiveDropdown] = useState(null);
    
    // 🔹 State for mobile menu open/close
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate(); // ✅ React Router hook for navigation

    // ✅ Handle Contact Us navigation and close menu
    const handleContactUs = () => {
        navigate('/contactus');
        setMenuOpen(false); // Close mobile menu after navigation
    };

    // ✅ Toggle dropdown visibility for each menu item
    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    // ✅ Toggle mobile menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setActiveDropdown(null); // Close any open dropdown when opening the menu
    };

    return (
        <nav className="navbar"> {/* 🔹 Navbar main container */}

            {/* 🔹 Logo Section */}
            <div className="logo">
                <a href="/">
                    <img src={JaiTechnologies} alt="JaiTechnologies" className="logo-img"/>
                </a>
            </div>

            {/* 🔹 Navigation Links Container */}
            <div className={`nav-links-container ${menuOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    
                    {/* 🔹 Products Dropdown */}
                    <li className="dropdown" 
                        onMouseEnter={() => !menuOpen && toggleDropdown('products')}
                        onMouseLeave={() => !menuOpen && toggleDropdown('products')}
                        onClick={() => menuOpen && toggleDropdown('products')}>
                        <a href="#products">Products <i className="bi bi-caret-down-fill"></i></a>
                        {activeDropdown === 'products' && (
                            <div className="dropdown-menu">
                                <ul>
                                    <li><a href="CogniTip">CogniTip</a></li>
                                    <li><a href="CogniQuotes">CogniQuotes</a></li>
                                    <li><a href="#product3">CogniStar</a></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    {/* 🔹 Services Dropdown */}
                    <li className="dropdown" 
                        onMouseEnter={() => !menuOpen && toggleDropdown('services')}
                        onMouseLeave={() => !menuOpen && toggleDropdown('services')}
                        onClick={() => menuOpen && toggleDropdown('services')}>
                        <a href="solutions">Services <i className="bi bi-caret-down-fill"></i></a>
                        {activeDropdown === 'services' && (
                            <div className="dropdown-menu">
                                <ul>
                                <li><a href="aisdlc">AI-Powered SDLC & Automation</a></li>
            <li><a href="aiconsulting">AI Consulting & Strategy</a></li>
            <li><a href="aipowereddataanalysis">AI-Driven Data Intelligence</a></li>
            <li><a href="personalizationservices">Personalization & Customer Engagement</a></li>
            <li><a href="computervisionsolutions">Computer Vision & NLP Solutions</a></li>
            <li><a href="aia">AI-Powered Business Optimization</a></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    
                    {/* 🔹 Additional Link: About Us */}
                    <li><a href="aboutus">About Us</a></li>
                </ul>
            </div>

            {/* 🔹 Right Side: Contact Button + Menu Toggle */}
            <div className="nav-right">
                {/* Contact Us Button */}
                <button onClick={handleContactUs} className="contact-btn">Contact Us</button>

                {/* Mobile Menu Toggle Button */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

        </nav>
    );
};

export default Navbar;

/*State Management

menuOpen: Tracks whether the mobile menu is open or closed.
activeDropdown: Determines which dropdown menu is currently open.
Navigation Handling

useNavigate() from React Router is used to navigate to the Contact Us page.
Dropdown Menu Behavior

Uses onMouseEnter and onMouseLeave for desktop hover menus.
Uses onClick for mobile dropdowns.
Mobile Menu Toggle

Toggles between open and closed states when clicking the hamburger menu (FaBars and FaTimes icons).
*/