// 3/28 Johanan
import express from 'express';

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


//starts server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
