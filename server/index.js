require('dotenv').config();
const Sequelize=require('sequelize');
const express = require('express');
const cors = require('cors');
const security = require('./routes/security');
const tryst =require('./routes/tryst');
const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.ALLOWED_ORIGIN,
    optionsSuccessStatus: 200,
}))
app.use(express.urlencoded({ extended: true }));
app.use('/security', security);
app.use('/api/tryst',tryst);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server is running on: http://localhost:" + PORT);
})