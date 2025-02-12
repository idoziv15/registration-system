const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const getTextRoute = require('./routes/getText');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/ai', getTextRoute);

app.get('/', (req, res) => {
    res.send({ status: "✅ AI Service is running" });
});

app.listen(PORT, () => {
    console.log(`AI-Service is running on port ${PORT}`);
});
