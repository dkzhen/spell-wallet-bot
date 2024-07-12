const express = require('express');
const fs = require('fs');

const router = express.Router();// adjust the path as necessary

router.post('/addToken', async (req, res) => {
    const { auth }  = req.body;

    if (!auth) {
        return res.status(400).json({ error: 'Auth token is required' });
    }

    try {
        // Read the existing tokens
        const data = JSON.parse(fs.readFileSync('configs/config.json', 'utf-8'));
        // Add the new token
        data.push({ auth });
    
        // Write the updated tokens back to the file
       
        fs.writeFileSync('configs/config.json', JSON.stringify(data, null, 2), 'utf-8');

        res.status(200).json({ message: 'Token added successfully', data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
