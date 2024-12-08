const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

/**
 * POST endpoint at the root.
 * Accepts a JSON body and responds with the content of the "content" field.
 * 
 * @route POST /
 * @param {object} req.body - The request body.
 * @param {string} req.body.content - The "content" field to extract from the request body.
 * @returns {object} 200 - JSON object containing the "content" field.
 * @returns {object} 400 - Error message if the "content" field is missing.
 */
app.post('/', (req, res) => {
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ error: '"content" field is required' });
    }

    res.status(200).json({ content });
});

module.exports = app;
