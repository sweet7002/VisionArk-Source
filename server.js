const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DISCORD_WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL_HERE';  // Replace with your actual Discord webhook URL

// Middleware for security and parsing JSON
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// Rate limiting to prevent abuse
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(limiter);

app.post('/send-email', async (req, res) => {
    const email = req.body.email;

    // Validate email against the allowed domains
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|icloud\.com|outlook\.com|hotmail\.com|yahoo\.com)$/;
    if (!emailPattern.test(email)) {
        return res.status(400).json({ success: false, message: 'Invalid email domain.' });
    }

    try {
        await axios.post(DISCORD_WEBHOOK_URL, {
            content: `New email submission: ${email}`
        });

        res.json({ success: true });
    } catch (error) {
        console.error('Error sending email to Discord webhook:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
