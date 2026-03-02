const express = require('express');
const path = require('path');

// Exoress and port
const app = express();
const PORT = 3000;

// path to public folder
const publicPath = path.join(__dirname, 'public');

// Middleware
app.use(express.static(publicPath));


//Route handlers
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(publicPath, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(publicPath, 'contact.html'));
});


// API
app.get('/api/time', (req, res) => {
    res.json({
        currentTime: new Date()
    });
});


// Error Handling

// 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(publicPath, '404.html'));
});

// 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).sendFile(path.join(publicPath, '500.html'));
});


// Log message
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Available routes:');
    console.log('GET  /');
    console.log('GET  /about');
    console.log('GET  /contact');
    console.log('GET  /api/time');
});