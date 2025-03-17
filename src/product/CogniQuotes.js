import React, { useState, useRef } from "react";
import { fetchAIQuote } from "../apiCall/api";
import { FaUser, FaHeartbeat, FaMoneyBill, FaBook, FaBriefcase, FaHeart, FaBars, FaMagic } from "react-icons/fa";
import '../assets/styles/CogniQuotes.css'
import cogniquote from '../assets/Images/ProductImg/CogniQuotes.webp'
import ComprehensiveIT from "../Components/ComprehensiveIT";
import Footer from "../Components/Footer";
/**
 * ✅ Categories List:
 * - This array defines different categories of tips.
 * - Each category has a title and a motivational message (`positiveWords`).
 * - The motivational message is displayed before the AI-generated tip.
 */
const categories = [
    { title: "World Leaders", positiveWords: "Family is love, support, and a bond that lasts forever." },
    { title: "Sports", positiveWords: "Your health is your wealth. Take care of your body, it's the only place you have to live." },
    { title: "Finance", positiveWords: "Manage your money wisely. A little savings today can create a big future tomorrow." },
    { title: "Education ", positiveWords: "Education is the key to unlocking the world, a passport to freedom." },
    { title: "Career ", positiveWords: "Success in your career comes from passion, persistence, and patience." },
    { title: "Relationship ", positiveWords: "Strong relationships are built on trust, love, and understanding." },
    { title: "Custom Quotes", positiveWords: "Enter a keyword to get a personalized Quote!" },
];

/**
 * ✅ Sidebar Menu Items:
 * - These represent different categories that users can select from the sidebar.
 * - Each item includes a name and an icon.
 */
const menuItems = [
    { name: "World Leaders", icon: <FaUser /> },
    { name: "Sports", icon: <FaHeartbeat /> },
    { name: "FINANCE", icon: <FaMoneyBill /> },
    { name: "EDUCATION", icon: <FaBook /> },
    { name: "CAREER", icon: <FaBriefcase /> },
    { name: "RELATIONSHIP", icon: <FaHeart /> },
    { name: "CUSTOM QUOTES", icon: <FaMagic /> },
];

const CogniQuotes = () => {
    /**
     * ✅ State Variables:
     * - `responses`: Stores AI-generated responses for each category.
     * - `activeItem`: Keeps track of which category is selected.
     * - `customKeyword`: Stores user input when generating a custom tip.
     * - `customResponse`: Holds AI-generated responses for a custom keyword.
     * - `loading`: Used to show a loading indicator when fetching data from OpenAI.
     * - `isSidebarOpen`: Toggles the sidebar's visibility.
     * - `focused`: Controls the focus effect for the tip card.
     */
    const [responses, setResponses] = useState(categories.map(() => " AI Powered Custom Tip"));
    const [activeItem, setActiveItem] = useState(null);
    const [customKeyword, setCustomKeyword] = useState(""); 
    const [customResponse, setCustomResponse] = useState(""); 
    const [loading, setLoading] = useState(false); 
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [focused, setFocused] = useState(false);

    // ✅ Reference object to store references for scrolling to tip cards
    const tipRefs = useRef({});

    

    /**
     * ✅ Generate AI Response:
     * - This function fetches an AI-generated tip based on the selected category or custom keyword.
     * - If the user selects "Custom Tip", they must enter a keyword.
     * - The function sends a request to OpenAI's API and updates the response in the state.
     */
    const generateAIResponse = async (index, keyword = "") => {
        if (categories[index].title === "Custom Quote" && keyword.trim() === "") {
            alert("Please enter a keyword for a custom quote!");
            return;
        }

        setLoading(true);

        const prompt = keyword
            ? `Give me a useful and motivational quote about ${keyword}.`
            : `Give me a unique and useful quote about ${categories[index].title}.`;

        try {
            const aiResponse = await fetchAIQuote(prompt); // ✅ Calls backend API and gets AI-generated response

            // ✅ Store response in state, updating the correct category or custom tip section
            if (categories[index].title === "Custom Tip") {
                setCustomResponse(aiResponse); // Store AI-generated response for custom tip
            } else {
                const newResponses = [...responses];
                newResponses[index] = aiResponse; // Update response for the selected category
                setResponses(newResponses);
            }
            setLoading(true);
            
            


           

            setFocused(true);
        } catch (error) {
            console.error("Full Error Response:", error.response?.data || error);
            alert(`API Error: ${error.response?.data?.error?.message || "Unknown error"}`);
        } finally {
            setLoading(false);
        }
    };
    
    

    /**
     * ✅ Handle Menu Click:
     * - This function sets the selected category as active.
     * - It scrolls smoothly to the selected tip card.
     */
    const handleMenuClick = (index) => {
        setActiveItem(index);
        setFocused(false);
        setCustomKeyword(""); 
        setCustomResponse(""); 

        setTimeout(() => {
            if (tipRefs.current[index]) {
                tipRefs.current[index].scrollIntoView({ behavior: "smooth", block: "center" });
            } else {
                console.warn("Warning: tipRefs.current[index] is undefined");
            }
        }, 100);
    };

    return (
        <>
        
       
        <div className="cognitip-container">
            {/* ✅ Sidebar (Left Navigation Menu) */}
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
                    <img src={cogniquote} alt="Cognitip" className="cognitip-image" />
                </div>

                {activeItem !== null && (
                    <div 
                        key={activeItem} 
                        ref={(el) => (tipRefs.current[activeItem] = el)} 
                        className={`cognitip-tip-card ${focused ? "focused" : ""}`}
                    >
                        <h2>{categories[activeItem].title}</h2>
                        <p className="positive-text">{categories[activeItem].positiveWords}</p>

                        <div className="cognitip-ai-response">
                            {categories[activeItem].title === "Custom Tip" ? (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Enter a keyword..."
                                        value={customKeyword}
                                        onChange={(e) => setCustomKeyword(e.target.value)}
                                        className="cognitip-custom-input"
                                    />
                                    <button className="custom-tip-btn" onClick={() => generateAIResponse(activeItem, customKeyword)}>
                                        {loading ? "Generating..." : "Generate Custom Tip"}
                                    </button>
                                    <div className="response-box">{loading ? "Loading..." : customResponse}</div>
                                </>
                            ) : (
                                <>
                                    <div className="cognitip-response-box">{loading ? "Loading..." : responses[activeItem]}</div>
                                    <button className="cognitip-ai-tip-btn" onClick={() => generateAIResponse(activeItem)}>
                                        {loading ? "Generating..." : "Generate AI Quote"}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </main>
             {/* ✅ Right-Side Ad Blocks */}
        <aside className="cognitip-ad-sidebar">
            <div className="cognitip-ad-block">Ad 1</div>
            <div className="cognitip-ad-block">Ad 2</div>
            <div className="cognitip-ad-block">Ad 3</div>
        </aside>
        
        </div>
        <ComprehensiveIT />
        <Footer />
        </>

    );
};

export default CogniQuotes;
