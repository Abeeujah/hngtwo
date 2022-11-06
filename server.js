// Require HTTP Module and Express App..
const http = require('http');
const app = require('./app');

// Server Intricacies..
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

// Start Server..
server.listen(PORT, () => {
    console.log('Listening', PORT);
});