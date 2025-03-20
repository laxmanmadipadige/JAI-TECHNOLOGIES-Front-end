import React, { useState } from "react";
import { fetchAIQuote, fetchAICustomQuote, fetchAITip, fetchAICustomTip } from "../apiCall/api"; 
import "../assets/styles/QuoteAndTipGenerator.css"; 

const QuoteAndTipGenerator = () => {
  const [customQuote, setCustomQuote] = useState(""); 
  const [generatedQuote, setGeneratedQuote] = useState("The only way to do great work is to love what you do."); 
  const [customTip, setCustomTip] = useState(""); 
  const [generatedTip, setGeneratedTip] = useState("Practice gratitude daily by taking a few minutes to reflect on the things you are thankful for.");

  // ✅ Function to generate a random or custom AI quote
  const handleGenerateQuote = async () => {
    try {
      const result = customQuote ? await fetchAICustomQuote(customQuote) : await fetchAIQuote();
      setGeneratedQuote(result);
    } catch (error) {
      setGeneratedQuote("Failed to generate quote. Please try again.");
    }
  };

  // ✅ Function to generate a random or custom AI tip
  const handleGenerateTip = async () => {
    try {
      const result = customTip ? await fetchAICustomTip(customTip) : await fetchAITip();
      setGeneratedTip(result);
    } catch (error) {
      setGeneratedTip("Failed to generate tip. Please try again.");
    }
  };

  return (
    <div className="fadein">
      <div className="container-qt">
        
        {/* ✅ Quote Section */}
        <h2 className="section-title">AI Quote of the Day</h2>
        <p className="output-box">{generatedQuote}</p>
        <input
          type="text"
          placeholder="Insert key words"
          value={customQuote}
          onChange={(e) => setCustomQuote(e.target.value)}
          className="input-box"
        />
        <button onClick={handleGenerateQuote} className="generate-button">
          Generate Quote
        </button>

        {/* ✅ Tip Section */}
        <h2 className="section-title">AI Tip of the Day</h2>
        <p className="output-box">{generatedTip}</p>
        <input
          type="text"
          placeholder="Insert key words"
          value={customTip}
          onChange={(e) => setCustomTip(e.target.value)}
          className="input-box"
        />
        <button onClick={handleGenerateTip} className="generate-button">
          Generate Tip
        </button>

      </div>
    </div>
  );
};

export default QuoteAndTipGenerator;
