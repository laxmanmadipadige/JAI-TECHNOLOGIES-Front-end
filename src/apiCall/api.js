import axios from "axios";

const BACKEND_URL = "https://jai-tech-backend-ekehczgpa8bxb8et.centralus-01.azurewebsites.net";

// ✅ Email API
export const sendEmail = async (formData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/send-email`, formData);
        return response.data.message;
    } catch (error) {
        throw new Error(error.response?.data?.error || "Error sending email");
    }
};

// ✅ Tip API
export const fetchAITip = async (keywords) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/quotes/generate-tip`, { keywords });
        return response.data.tip;
    } catch (error) {
        throw new Error(error.response?.data?.error || "Error fetching AI tip");
    }
};

// ✅ Quote API
export const fetchAIQuote = async (keywords) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/api/quotes/generate-quote`, { keywords });
        return response.data.quote;
    } catch (error) {
        throw new Error(error.response?.data?.error || "Error fetching AI Quote");
    }
};
