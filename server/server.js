const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

//db connection
mongoose.connect('mongodb+srv://admin:admin@cluster0.czch7.mongodb.net/')
    .then(() => console.log('mongo db connected'))
    .catch((err) => console.log('err:',err));

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
