// server.js
const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

// compress all responses
app.use(compression());

// serve our static stuff like index.css
app.use(express.static(__dirname));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Production Express server running at localhost:' + PORT);
})