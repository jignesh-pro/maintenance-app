const express = require('express');

const app = express();

// Middleware to handle all incoming requests
app.use((req, res, next) => {
    if (req.get('Content-Type') === 'application/json') {
        res.status(503).json({ message: 'Under Maintenance' });
    } else {
        res.status(503).send('Under Maintenance');
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
