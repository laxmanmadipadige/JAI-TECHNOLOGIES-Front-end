// ✅ Import necessary dependencies
import React, { useState, useRef } from "react"; // React core functions for state and references
import { fetchAITip } from "../apiCall/api"; // ✅ Import function to fetch AI-generated tips from the backend
import { FaUser, FaHeartbeat, FaMoneyBill, FaBook, FaBriefcase, FaHeart, FaBars, FaMagic } from "react-icons/fa"; // ✅ Import icons for the sidebar menu
import '../assets/styles/CogniTip.css'; // ✅ Import CSS for component styling
import cognitipImage from '../assets/Images/ProductImg/CogniTips.webp'; // ✅ Import banner image for UI
import ComprehensiveIT from "../Components/ComprehensiveIT"; // ✅ Import additional UI component
import Footer from "../Components/Footer"; // ✅ Import Footer component

// ✅ Define different categories of tips, each with a title and motivational message
const categories = [
    { title: "Family Tips", positiveWords: "Family is love, support, and a bond that lasts forever." },
    { title: "Health Tips", positiveWords: "Your health is your wealth. Take care of your body, it's the only place you have to live." },
    { title: "Financial Tips", positiveWords: "Manage your money wisely. A little savings today can create a big future tomorrow." },
    { title: "Education Tips", positiveWords: "Education is the key to unlocking the world, a passport to freedom." },
    { title: "Career Tips", positiveWords: "Success in your career comes from passion, persistence, and patience." },
    { title: "Relationship Tips", positiveWords: "Strong relationships are built on trust, love, and understanding." },
    { title: "Custom Tip", positiveWords: "Enter a keyword to get a personalized tip!" },
];

// ✅ Define sidebar menu items, each with a corresponding icon
const menuItems = [
    { name: "FAMILY", icon: <FaUser /> },
    { name: "HEALTH", icon: <FaHeartbeat /> },
    { name: "FINANCE", icon: <FaMoneyBill /> },
    { name: "EDUCATION", icon: <FaBook /> },
    { name: "CAREER", icon: <FaBriefcase /> },
    { name: "RELATIONSHIP", icon: <FaHeart /> },
    { name: "CUSTOM TIP", icon: <FaMagic /> },
];

// ✅ Main component definition
const CogniTip = () => {
    // ✅ State variables to manage different aspects of the component
    const [responses, setResponses] = useState(categories.map(() => " AI Powered Custom Tip")); // Stores AI-generated tips
    const [activeItem, setActiveItem] = useState(null); // Tracks which category is selected
    const [customKeyword, setCustomKeyword] = useState(""); // Stores user input for custom tip
    const [customResponse, setCustomResponse] = useState(""); // Stores AI response for custom keyword
    const [loading, setLoading] = useState(false); // Manages loading state while fetching AI tips
    const [isSidebarOpen, setSidebarOpen] = useState(true); // Controls sidebar open/close state
    const [focused, setFocused] = useState(false); // Controls focus state for the tip card

    const tipRefs = useRef({}); // ✅ Creates references for scrolling to tip cards dynamically

    /**
     * ✅ Function to fetch AI-generated responses
     * - Calls `fetchAITip()` API function to get a tip from the backend.
     * - If the user selects "Custom Tip", it ensures they enter a keyword.
     * - Updates the state with the fetched response.
     */
    const generateAIResponse = async (index, keyword = "") => {
        // If the user selects "Custom Tip" but doesn't enter a keyword, show an alert
        if (categories[index].title === "Custom Tip" && keyword.trim() === "") {
            alert("Please enter a keyword for a custom tip!");
            return;
        }

        setLoading(true); // ✅ Show loading state

        // ✅ Define prompt for AI API request
        const prompt = keyword
            ? `Give me a useful and motivational tip about ${keyword}.`
            : `Give me a unique and useful tip about ${categories[index].title}.`;

        try {
            const aiResponse = await fetchAITip(prompt); // ✅ Calls backend API and gets AI-generated response

            // ✅ Store response in state, updating the correct category or custom tip section
            if (categories[index].title === "Custom Tip") {
                setCustomResponse(aiResponse); // Store AI-generated response for custom tip
            } else {
                const newResponses = [...responses];
                newResponses[index] = aiResponse; // Update response for the selected category
                setResponses(newResponses);
            }

            setFocused(true); // ✅ Set focus on the generated response
        } catch (error) {
            alert(`API Error: ${error.message}`); // Show error message if API call fails
        } finally {
            setLoading(false); // ✅ Hide loading state after API call completes
        }
    };

    /**
     * ✅ Handles menu item click events
     * - Updates the selected category.
     * - Clears previous responses when a new category is selected.
     * - Scrolls smoothly to the selected tip card.
     */
    const handleMenuClick = (index) => {
        setActiveItem(index);
        setFocused(false);
        setCustomKeyword(""); // ✅ Reset keyword input
        setCustomResponse(""); // ✅ Clear previous AI response

        // ✅ Scroll smoothly to the selected category's tip card
        setTimeout(() => {
            if (tipRefs.current[index]) {
                tipRefs.current[index].scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }, 100);
    };

    return (
        <>
        <div className="cognitip-container">
            {/* ✅ Sidebar Navigation */}
            <aside className={`cognitip-sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                <button className="cognitip-toggle-btn" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                    <FaBars />
                </button>
                <h2>Menu</h2>
                <ul>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={activeItem === index ? "active-menu" : ""}
                            onClick={() => handleMenuClick(index)}
                        >
                            {item.icon} {isSidebarOpen && item.name}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* ✅ Main Content Section */}
            <main className="cognitip-content">
                <div className="cognitip-image-container">
                    <img src={cognitipImage} alt="Cognitip" className="cognitip-image" />
                </div>

                {activeItem !== null && (
                    <div className={`cognitip-tip-card ${focused ? "focused" : ""}`}>
                        <h2>{categories[activeItem].title}</h2>
                        <p className="positive-text">{categories[activeItem].positiveWords}</p>

                        <div className="cognitip-ai-response">
                            {categories[activeItem].title === "Custom Tip" ? (
                                <>
                                    <input type="text" placeholder="Enter a keyword..." value={customKeyword} onChange={(e) => setCustomKeyword(e.target.value)} className="cognitip-custom-input" />
                                    <button className="custom-tip-btn" onClick={() => generateAIResponse(activeItem, customKeyword)}>{loading ? "Generating..." : "Generate Custom Tip"}</button>
                                    <div className="response-box">{loading ? "Loading..." : customResponse}</div>
                                </>
                            ) : (
                                <>
                                    <div className="cognitip-response-box">{loading ? "Loading..." : responses[activeItem]}</div>
                                    <button className="cognitip-ai-tip-btn" onClick={() => generateAIResponse(activeItem)}>{loading ? "Generating..." : "Generate AI Tip"}</button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
        <ComprehensiveIT />
        <Footer />
        </>
    );
};

export default CogniTip;

/*
<aisde> tag-Left column
    ✅ Creates a collapsible sidebar for selecting different tip categories.
✅ Uses a button (FaBars icon) to toggle the sidebar between open and closed.
✅ Maps through menuItems array and dynamically creates a list of menu items.
✅ When an item is clicked, handleMenuClick(index) updates the active category.

🔹 Key Functionalities
Sidebar Toggling:
Clicking the button (FaBars) toggles the sidebar between open and closed.
Uses isSidebarOpen ? "open" : "closed" to apply CSS styles dynamically.
Active Category Highlighting:
If activeItem === index, the menu item gets an "active-menu" class (CSS highlights it).



<main> tag -Mid column
    ✅ Displays the category image (cognitipImage) at the top.
✅ Shows the AI-generated tip card only if a category is selected (activeItem !== null).
✅ Includes different UI layouts based on whether the user selects:

A predefined category → Fetches and displays AI-generated tips.
A custom tip → Allows users to enter a keyword and fetch a personalized tip.
🔹 Key Functionalities
Displays Motivational Message:
categories[activeItem].positiveWords → Shows a predefined motivational message for each category.
Handles Custom Tip Input:
If the user selects "Custom Tip", an input box appears.
User enters a keyword → generateAIResponse(activeItem, customKeyword) fetches a tip from the API.
Handles AI-Generated Tips:
Calls generateAIResponse(activeItem) when the "Generate AI Tip" button is clicked.
Displays "Loading..." while fetching, then shows the AI-generated response.

📝 Final Summary
Component	Purpose
Sidebar (aside)	Displays a menu of categories for AI-generated tips.
Sidebar Button (FaBars)	Toggles the sidebar between open and closed.
Menu List (<ul> with menuItems.map)	Dynamically generates categories from an array.
Main Section (<main>)	Displays AI-generated tips and category messages.
Image (cognitipImage)	Adds a header banner to the page.
AI Response Box	Shows AI-generated tips or allows custom tip input.
"Generate AI Tip" Button	Calls generateAIResponse(activeItem) to fetch tips from the API.
Footer (ComprehensiveIT & Footer)	Includes additional services and site footer.

*/
