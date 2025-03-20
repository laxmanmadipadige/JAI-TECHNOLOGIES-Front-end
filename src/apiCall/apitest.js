const BASE_URL = "https://cognitipstestapi.azurewebsites.net/api"; // Azure API Base URL

// ✅ Fetch a random AI-generated quote
export const fetchAIQuote = async () => {
    try {
        const response = await fetch(`${BASE_URL}/quote`);
        if (!response.ok) throw new Error("Failed to fetch quote");
        const data = await response.text(); // Assuming response is plain text
        return data;
    } catch (error) {
        console.error("Error fetching AI quote:", error);
        return "Failed to generate quote. Please try again.";
    }
};

// ✅ Fetch a custom AI-generated quote based on user input
export const fetchAICustomQuote = async (userInput) => {
    try {
        const response = await fetch(`${BASE_URL}/customQuote?userInput=${encodeURIComponent(userInput)}`);
        if (!response.ok) throw new Error("Failed to fetch custom quote");
        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching custom AI quote:", error);
        return "Failed to generate quote. Please try again.";
    }
};

// ✅ Fetch a random AI-generated tip
export const fetchAITip = async () => {
    try {
        const response = await fetch(`${BASE_URL}/tip`);
        if (!response.ok) throw new Error("Failed to fetch tip");
        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching AI tip:", error);
        return "Failed to generate tip. Please try again.";
    }
};

// ✅ Fetch a custom AI-generated tip based on user input
export const fetchAICustomTip = async (userInput) => {
    try {
        const response = await fetch(`${BASE_URL}/customTip?userInput=${encodeURIComponent(userInput)}`);
        if (!response.ok) throw new Error("Failed to fetch custom tip");
        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching custom AI tip:", error);
        return "Failed to generate tip. Please try again.";
    }
};
