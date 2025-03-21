const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://cognitipstestapi.azurewebsites.net/api";

// ✅ Fetch a custom AI-generated quote with proxy
export const fetchAICustomQuote = async (userInput) => {
    try {
        const response = await fetch(`${PROXY_URL}${BASE_URL}/customQuote?userInput=${encodeURIComponent(userInput)}`);
        if (!response.ok) throw new Error("Failed to fetch custom quote");
        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching custom AI quote:", error);
        return "Failed to generate quote. Please try again.";
    }
};

// ✅ Fetch a custom AI-generated tip with proxy
export const fetchAICustomTip = async (userInput) => {
    try {
        const response = await fetch(`${PROXY_URL}${BASE_URL}/customTip?userInput=${encodeURIComponent(userInput)}`);
        if (!response.ok) throw new Error("Failed to fetch custom tip");
        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching custom AI tip:", error);
        return "Failed to generate tip. Please try again.";
    }
};

// ✅ Export other existing functions
export const fetchAIQuote = async () => {
    try {
        const response = await fetch(`${PROXY_URL}${BASE_URL}/quote`);
        if (!response.ok) throw new Error("Failed to fetch quote");
        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching AI quote:", error);
        return "Failed to generate quote. Please try again.";
    }
};

export const fetchAITip = async () => {
    try {
        const response = await fetch(`${PROXY_URL}${BASE_URL}/tip`);
        if (!response.ok) throw new Error("Failed to fetch tip");
        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching AI tip:", error);
        return "Failed to generate tip. Please try again.";
    }
};
