const axios = require("axios");
const debug = require("debug")("ai-service:openai");
debug.log = console.log.bind(console);
require("dotenv").config();

const fetchOpenAIResponse = async () => {
    const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
    const API_KEY = process.env.OPENAI_API_KEY;
    const PROMPT = "Please generate a short random text";

    if (!API_KEY) {
        debug("❌ Missing OpenAI API Key");
        throw new Error("Missing OpenAI API Key");
    }

    try {
        const response = await axios.post(
            OPENAI_API_URL,
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful AI assistant." },
                    { role: "user", content: PROMPT }
                ],
                max_tokens: 100
            },
            {
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );
        
        let res = response.data.choices[0].message.content.trim();
        debug("✅ OpenAI Response: %O", res);
        return res;
    } catch (error) {
        debug("❌ OpenAI API Error: %O", error.response?.data || error);
        throw error;
    }
};

module.exports = { fetchOpenAIResponse };
