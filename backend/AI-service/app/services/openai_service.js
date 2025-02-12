const axios = require("axios");
require("dotenv").config();

const fetchOpenAIResponse = async (prompt) => {
    const OPENAI_API_URL = "https://api.openai.com/v1/completions";
    const API_KEY = process.env.OPENAI_API_KEY;
    
    if (!API_KEY) throw new Error("Missing OpenAI API Key");

    const response = await axios.post(
        OPENAI_API_URL,
        {
            model: "gpt-3.5-turbo",
            prompt,
            max_tokens: 100
        },
        {
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            }
        }
    );
    
    return response.data.choices[0].text.trim();
};

module.exports = { fetchOpenAIResponse };