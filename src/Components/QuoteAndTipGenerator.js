// ✅ Import React and hooks
import React, { useState } from "react";
// ✅ Import API functions to fetch AI-generated quotes and tips from the backend
import { fetchAIQuote, fetchAITip } from "../apiCall/api"; 
// ✅ Import CSS file for styling
import "../assets/styles/QuoteAndTipGenerator.css"; 

/**
 * ✅ QuoteAndTipGenerator Component
 * This component allows users to generate AI-powered quotes and tips
 * based on user input or predefined content.
 */
const QuoteAndTipGenerator = () => {
  /**
   * ✅ State Variables (useState)
   * - `customQuote` stores user input for quote generation.
   * - `generatedQuote` stores the AI-generated quote or the default quote.
   * - `customTip` stores user input for tip generation.
   * - `generatedTip` stores the AI-generated tip or the default tip.
   */
  const [customQuote, setCustomQuote] = useState(""); 
  const [generatedQuote, setGeneratedQuote] = useState(
    "The only way to do great work is to love what you do." // Default quote
  );
  const [customTip, setCustomTip] = useState(""); 
  const [generatedTip, setGeneratedTip] = useState(
    "Practice gratitude daily by taking a few minutes to reflect on the things you are thankful for." // Default tip
  );

  /**
   * ✅ Function: handleGenerateQuote
   * - Calls the backend API to generate an AI-powered quote.
   * - Uses `fetchAIQuote(customQuote)` to send the user input to the backend.
   * - If successful, updates `generatedQuote` with the AI response.
   * - If an error occurs, sets an error message.
   */
  const handleGenerateQuote = async () => {
    try {
      const result = await fetchAIQuote(customQuote); // Fetch AI-generated quote from backend
      setGeneratedQuote(result); // Store response in state
    } catch (error) {
      setGeneratedQuote("Failed to generate quote. Please try again."); // Handle API error
    }
  };

  /**
   * ✅ Function: handleGenerateTip
   * - Calls the backend API to generate an AI-powered tip.
   * - Uses `fetchAITip(customTip)` to send the user input to the backend.
   * - If successful, updates `generatedTip` with the AI response.
   * - If an error occurs, sets an error message.
   */
  const handleGenerateTip = async () => {
    try {
      const result = await fetchAITip(customTip); // Fetch AI-generated tip from backend
      setGeneratedTip(result); // Store response in state
    } catch (error) {
      setGeneratedTip("Failed to generate tip. Please try again."); // Handle API error
    }
  };

  return (
    <div className="fadein"> {/* ✅ Wrapper for fade-in animation */}
      <div className="container-qt"> {/* ✅ Main container for styling */}
        
        {/* ✅ Quote Section */}
        <h2 className="section-title">AI Quote of the Day</h2>
        
        {/* ✅ Display the AI-generated or default quote */}
        <p className="output-box">{generatedQuote}</p>

        {/* ✅ Input field for user to enter custom keywords for quote generation */}
        <input
          type="text"
          placeholder="Insert key words"
          value={customQuote}
          onChange={(e) => setCustomQuote(e.target.value)} // Updates state on user input
          className="input-box"
        />

        {/* ✅ Button to generate a new AI-powered quote */}
        <button onClick={handleGenerateQuote} className="generate-button">
          Generate Quote
        </button>

        {/* ✅ Tip Section */}
        <h2 className="section-title">AI Tip of the Day</h2>
        
        {/* ✅ Display the AI-generated or default tip */}
        <p className="output-box">{generatedTip}</p>

        {/* ✅ Input field for user to enter custom keywords for tip generation */}
        <input
          type="text"
          placeholder="Insert key words"
          value={customTip}
          onChange={(e) => setCustomTip(e.target.value)} // Updates state on user input
          className="input-box"
        />

        {/* ✅ Button to generate a new AI-powered tip */}
        <button onClick={handleGenerateTip} className="generate-button">
          Generate Tip
        </button>

      </div>
    </div>
  );
};

// ✅ Exporting the component for use in other parts of the application
export default QuoteAndTipGenerator;

/*
Key Functionalities
State Management (useState)

Stores user input and AI-generated results for quotes and tips.
AI Quote Generation (handleGenerateQuote)

Sends user input to fetchAIQuote() API and updates the quote display.
Handles errors if the API call fails.
AI Tip Generation (handleGenerateTip)

Calls fetchAITip() API with user input to generate an AI-powered tip.
Displays error messages if API fails.
UI & Interactions

Displays default quotes and tips before API responses.
Users can input keywords to generate relevant AI-powered content.
Uses fade-in animations and a structured layout for styling.
*/
