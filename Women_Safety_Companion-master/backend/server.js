const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint for Formspree email submission (no backend email handling)
app.post('/submit-form', (req, res) => {
    // Forward form data to Formspree directly
    const formspreeUrl = 'https://formspree.io/f/xeoekzzb';
    const fetch = require('node-fetch');
    
    fetch(formspreeUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form sent successfully to Formspree:', data);
        res.status(200).json({ message: 'Form submitted successfully!' });
    })
    .catch((error) => {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Error submitting form' });
    });
});

// Panic Alert Route (Without Twilio or Nodemailer)
app.post('/panic', (req, res) => {
    const { userName, location, phoneNumbers } = req.body;

    if (!userName || !location || !phoneNumbers || !phoneNumbers.length) {
        return res.status(400).json({ error: 'Missing userName, location, or phoneNumbers' });
    }

    // Here, you can process the panic alert in any way you'd like (e.g., log the event)
    console.log(`Panic Alert! User: ${userName}, Location: ${location}, Emergency Contacts: ${phoneNumbers}`);

    // Respond to the client
    res.status(200).json({ message: 'Panic alert received successfully!' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
