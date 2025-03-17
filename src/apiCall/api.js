import axios from "axios";

const BACKEND_URL = "http://localhost:5002"; // ✅ Ensure this is correct

export const sendEmail = async (formData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/send-email`, formData);
        return response.data.message;
    } catch (error) {
        throw new Error(error.response?.data?.error || "Error sending email");
    }
};



// ✅ AI Tip API Call
export const fetchAITip = async (prompt) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/generate-tip`, { prompt });
        return response.data.tip; // ✅ Only return the tip string, NOT the entire Axios response
    } catch (error) {
        throw new Error(error.response?.data?.error || "Error fetching AI tip");
    }
};

// Fetch AI Quote from Backend
export const fetchAIQuote = async (keywords) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/generate-quote`, { keywords });
        return response.data.quote;
    } catch (error) {
        throw new Error(error.response?.data?.error || "Error fetching AI Quote");
    }
};