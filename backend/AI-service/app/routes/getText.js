const express = require("express");
const { fetchOpenAIResponse } = require("../services/openai_service");
const router = express.Router();

router.get("/generate-random-text", async (req, res) => {
    try {
        const response = await fetchOpenAIResponse();
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch AI response" });
    }
});

module.exports = router;