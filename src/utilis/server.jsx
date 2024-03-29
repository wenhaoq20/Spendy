// 3/28 Johanan
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

const app = express();
const PORT = process.env.PORT || 3000;

//sample data
let users = [];

//endpoints
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const { id, name, email } = req.body;
    if (!id || !name || !email) {
        return res.status(400).json({ message: "Please provide id, name, and email" });
    }
    const newUser = { id, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

//request handling
const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

//react rendering
app.get('/', (req, res) => {
    const content = ReactDOMServer.renderToString(<App />);
    res.send(`
        <html>
            <head>
                <title>React Server-side Rendering</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="/client.js"></script>
            </body>
        </html>
    `);
});

//starts server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
