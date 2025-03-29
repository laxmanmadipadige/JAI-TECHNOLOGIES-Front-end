// ✅ Import necessary dependencies
import React, { useState, useRef } from "react"; // React core functions for state and references
import { fetchAITip } from "../apiCall/api"; // ✅ Import function to fetch AI-generated tips from the backend
import { FaUser, FaHeartbeat, FaMoneyBill, FaBook, FaBriefcase, FaHeart, FaBars, FaMagic } from "react-icons/fa"; // ✅ Import icons for the sidebar menu
import '../assets/styles/CogniTip.css'; // ✅ Import CSS for component styling
import ComprehensiveIT from "../Components/ComprehensiveIT"; // ✅ Import additional UI component
import Footer from "../Components/Footer"; // ✅ Import Footer component



const categories = [
    { title: "Family Tips", positiveWords: "Family is love, support, and a bond that lasts forever." },
    { title: "Health Tips", positiveWords: "Your health is your wealth. Take care of your body, it's the only place you have to live." },
    { title: "Financial Tips", positiveWords: "Manage your money wisely. A little savings today can create a big future tomorrow." },
    { title: "Education Tips", positiveWords: "Education is the key to unlocking the world, a passport to freedom." },
    { title: "Career Tips", positiveWords: "Success in your career comes from passion, persistence, and patience." },
    { title: "Relationship Tips", positiveWords: "Strong relationships are built on trust, love, and understanding." },
    { title: "Custom Tip", positiveWords: "Enter a keyword to get a personalized tip!" },
];

const menuItems = [
    { name: "FAMILY", icon: <FaUser /> },
    { name: "HEALTH", icon: <FaHeartbeat /> },
    { name: "FINANCE", icon: <FaMoneyBill /> },
    { name: "EDUCATION", icon: <FaBook /> },
    { name: "CAREER", icon: <FaBriefcase /> },
    { name: "RELATIONSHIP", icon: <FaHeart /> },
    { name: "CUSTOM TIP", icon: <FaMagic /> },
];

const CogniTip = () => {
    const [responses, setResponses] = useState(categories.map(() => " AI Powered Tip"));
    const [activeItem, setActiveItem] = useState(0);
    const [customKeyword, setCustomKeyword] = useState("");
    const [customResponse, setCustomResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [focused, setFocused] = useState(false);

    const tipRefs = useRef({});

    const generateAIResponse = async (index, keyword = "") => {
        if (categories[index].title === "Custom Tip" && keyword.trim() === "") {
            alert("Please enter a keyword for a custom tip!");
            return;
        }

        setLoading(true);

        const prompt = keyword
            ? `Give me a useful and motivational tip about ${keyword}.`
            : `Give me a unique and useful tip about ${categories[index].title}.`;

        try {
            const aiResponse = await fetchAITip (prompt);
            if (categories[index].title === "Custom Tip") {
                setCustomResponse(aiResponse);
            } else {
                const newResponses = [...responses];
                newResponses[index] = aiResponse;
                setResponses(newResponses);
            }
            setFocused(true);
        } catch (error) {
            alert(`API Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleMenuClick = (index) => {
        setActiveItem(index);
        setFocused(false);
        setCustomKeyword("");
        setCustomResponse("");

        setTimeout(() => {
            if (tipRefs.current[index]) {
                tipRefs.current[index].scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }, 100);
    };

    return (
        <>
        <div className="jct-container">
            <aside className={`jct-sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                <button className="jct-toggle-btn" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                    <FaBars />
                </button>
                <h2>Menu</h2>
                <ul>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={activeItem === index ? "jct-active-menu" : ""}
                            onClick={() => handleMenuClick(index)}
                        >
                            {item.icon} {isSidebarOpen && item.name}
                        </li>
                    ))}
                </ul>
            </aside>

            <main className="jct-content">
                <div className="jct-intro">
                <h1>CogniTip – Your AI-Powered Life Companion</h1>

                    <p>
                    Every day, we’re faced with hundreds of decisions — from how we treat our bodies to how we handle relationships, manage finances, grow our careers, or support our families.
                    While the internet is filled with advice, what we really crave is something simple, clear, and meaningful — a nudge in the right direction.
                    </p>

                    <p>
                    <strong>CogniTip</strong> was built to be that nudge.
                    It's a smart, AI-powered assistant that provides thoughtful, motivational, and highly relevant tips across the most important areas of your life.
                    Whether you're seeking wisdom, guidance, or just a fresh spark of inspiration, CogniTip meets you where you are — and helps you grow.
                    </p>

                    <h2>✨ Why People Love CogniTip</h2>
                    <ul>
                    <li><strong>AI that Understands You:</strong> Each tip is generated based on the category or topic you choose, making it feel personal and relevant.</li>
                    <li><strong>Support Across Life’s Pillars:</strong> Get advice across family, health, career, education, finance, and relationships — all in one place.</li>
                    <li><strong>Create Your Own Path:</strong> Use the custom keyword input to ask for tips on any subject, from parenting to public speaking to positivity.</li>
                    <li><strong>Inspire, Reflect, and Act:</strong> Sometimes, one great sentence is all it takes to change your mindset — and your day.</li>
                    </ul>

                    <p className="jct-tagline"><em>"Your next breakthrough might be just one tip away."</em></p>
                </div>

                {categories.map((category, index) => (
                    <div
                        key={index}
                        ref={(el) => (tipRefs.current[index] = el)}
                        className={`jct-tip-card ${activeItem === index && focused ? "focused" : ""}`}
                        style={{ display: activeItem === index ? "block" : "none" }}
                    >
                        <h2>{category.title}</h2>
                        <p className="jct-positive-text">{category.positiveWords}</p>

                        <div className="jct-response-container">
                            {category.title === "Custom Tip" ? (
                                <>
                                    <div className="jct-input-row">
                                        <input
                                            type="text"
                                            placeholder="Enter a keyword..."
                                            value={customKeyword}
                                            onChange={(e) => setCustomKeyword(e.target.value)}
                                            className="jct-custom-input"
                                        />
                                        <div className="jct-response-box">
                                            {loading ? "Loading..." : customResponse}
                                        </div>
                                        <button
                                            className="jct-custom-btn"
                                            onClick={() => generateAIResponse(index, customKeyword)}
                                        >
                                            {loading ? "Generating..." : "Generate AI Tip"}
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="jct-response-box">
                                        {loading ? "Loading..." : responses[index]}
                                    </div>
                                    <button
                                        className="jct-generate-btn"
                                        onClick={() => generateAIResponse(index)}
                                    >
                                        {loading ? "Generating..." : "Generate AI Tip"}
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}

            </main>

        </div>
                <ComprehensiveIT />
                <Footer />

        </>
    );
};

export default CogniTip;