const app = require('./app');

/**
 * Starts the Express server on the specified port.
 * 
 * @param {number} PORT - The port to start the server (default: 3000).
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
