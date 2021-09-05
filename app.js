const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({
        status: 'OK'
    });
});

app.all('*', (req, res) => {
    res.status(200).json({
        status: 'Unhandled'
    })
});

// Running
app.listen(3000, () => {
    console.log('Running')
})