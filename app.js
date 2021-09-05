const express = require('express');
const app = express();
const errorHandler = require('./controller/error');
const AppClass = require('./utils/AppError')

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({
        status: 'OK'
    });
});

app.all('*', (req, res, next) => {

    next(new AppClass('Error', 404));
});

app.use(errorHandler);

// Running
app.listen(3000, () => {
    console.log('Running')
})