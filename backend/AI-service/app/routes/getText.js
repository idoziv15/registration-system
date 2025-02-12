const express = require("express");
const { fetchOpenAIResponse } = require("../services/openai_service");

const router = express.Router();

router.post("/generate-random-text", async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) return res.status(400).json({ error: "Prompt is required" });

        const response = await fetchOpenAIResponse(prompt);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch AI response" });
    }
});

module.exports = router;