import express from "express"

const app = express();
const port = 3000;

app.get('/delay', (req, res) => {
    console.log('Received request, delaying response...');
    setTimeout(() => {
        res.send('Response after 5 seconds delay');
    }, 5000);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
