// ✅ Import necessary dependencies
import React, { useState, useRef } from "react"; // React core functions for state and references
import { fetchAIQuote } from "../apiCall/api"; // ✅ Import function to fetch AI-generated tips from the backend
import { FaUser, FaHeartbeat, FaMoneyBill, FaBook, FaBriefcase, FaHeart, FaBars, FaMagic } from "react-icons/fa"; // ✅ Import icons for the sidebar menu
import '../assets/styles/CogniQuotes.css'; // ✅ Import CSS for component styling
import ComprehensiveIT from "../Components/ComprehensiveIT"; // ✅ Import additional UI component
import Footer from "../Components/Footer"; // ✅ Import Footer component

const categories = [
    { title: "World Leaders", positiveWords: "Leadership is not about titles, it's about impact, influence, and inspiration." },
    { title: "Sports", positiveWords: "Success in sports comes from discipline, dedication, and the desire to improve every day." },
    { title: "Finance", positiveWords: "Financial wisdom is the ability to manage money with foresight, balance, and purpose." },
    { title: "Education", positiveWords: "Education is the most powerful weapon you can use to change the world." },
    { title: "Careers", positiveWords: "Great careers are built on consistency, learning, and seizing every opportunity." },
    { title: "Relationship", positiveWords: "Strong relationships are built on trust, love, communication, and mutual respect." },
    { title: "Custom Quotes", positiveWords: "Enter a keyword to generate your own personalized quote!" },
];

const menuItems = [
    { name: "WORLD LEADERS", icon: <FaUser /> },
    { name: "SPORTS", icon: <FaHeartbeat /> },
    { name: "FINANCE", icon: <FaMoneyBill /> },
    { name: "EDUCATION", icon: <FaBook /> },
    { name: "CAREERS", icon: <FaBriefcase /> },
    { name: "RELATIONSHIP", icon: <FaHeart /> },
    { name: "CUSTOM QUOTES", icon: <FaMagic /> },
];

const CogniQuotes = () => {
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
            ? `Give me a useful and motivational Quote about ${keyword}.`
            : `Give me a unique and useful Quote about ${categories[index].title}.`;

        try {
            const aiResponse = await fetchAIQuote(prompt);
            if (categories[index].title === "Custom Quote") {
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
        <div className="jcq-container">
            <aside className={`jcq-sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                <button className="jcq-toggle-btn" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                    <FaBars />
                </button>
                <h2>Menu</h2>
                <ul>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={activeItem === index ? "jcq-active-menu" : ""}
                            onClick={() => handleMenuClick(index)}
                        >
                            {item.icon} {isSidebarOpen && item.name}
                        </li>
                    ))}
                </ul>
            </aside>

            <main className="jcq-content">
            <div className="jcq-intro">
            <h1>CogniQuotes– Fuel Your Day with Words that Matter</h1>

            <p>
                In a world full of noise, sometimes all it takes is one sentence to spark action, shift your mindset, or bring clarity. Whether you need a dose of courage, focus, peace, or purpose — the right quote at the right time can make all the difference.
            </p>

            <p>
                <strong>CogniQuotes</strong> is your personal AI quote generator, designed to deliver powerful, thought-provoking, and uplifting quotes across topics that matter most — from leadership and love to resilience and success.
            </p>

            <h2>✨ Why People Love CogniQuotes</h2>
            <ul>
                <li><strong>Personalized Inspiration:</strong> Whether you're seeking motivation for your career, relationships, or daily life — our AI tailors quotes just for you.</li>
                <li><strong>Wide Range of Themes:</strong> Get quotes across categories like sports, leadership, finance, education, and more — all in one place.</li>
                <li><strong>Create Custom Quotes:</strong> Use the custom input to ask for quotes about anything — confidence, failure, growth, or even your favorite topic.</li>
                <li><strong>Quick Wisdom Boost:</strong> Sometimes, one line is enough to reset your energy and refocus your day.</li>
            </ul>

            <p className="jcq-tagline"><em>"One quote. One spark. One shift in perspective."</em></p>
</div>

                {categories.map((category, index) => (
                    <div
                        key={index}
                        ref={(el) => (tipRefs.current[index] = el)}
                        className={`jcq-tip-card ${activeItem === index && focused ? "focused" : ""}`}
                        style={{ display: activeItem === index ? "block" : "none" }}
                    >
                        <h2>{category.title}</h2>
                        <p className="jcq-positive-text">{category.positiveWords}</p>

                        <div className="jcq-response-container">
                            {category.title === "Custom Tip" ? (
                                <>
                                    <div className="jcq-input-row">
                                        <input
                                            type="text"
                                            placeholder="Enter a keyword..."
                                            value={customKeyword}
                                            onChange={(e) => setCustomKeyword(e.target.value)}
                                            className="jcq-custom-input"
                                        />
                                        <div className="jcq-response-box">
                                            {loading ? "Loading..." : customResponse}
                                        </div>
                                        <button
                                            className="jcq-custom-btn"
                                            onClick={() => generateAIResponse(index, customKeyword)}
                                        >
                                            {loading ? "Generating..." : "Generate AI Quote"}
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="jcq-response-box">
                                        {loading ? "Loading..." : responses[index]}
                                    </div>
                                    <button
                                        className="jcq-generate-btn"
                                        onClick={() => generateAIResponse(index)}
                                    >
                                        {loading ? "Generating..." : "Generate AI Quote"}
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

export default CogniQuotes;
