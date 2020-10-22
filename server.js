const express = require('express');
const dotenv = require('dotenv');


const app = express();

dotenv.config();

app.use(express.json());

// local imports
const db_connection = require('./db_server');
const registration = require('./routes/registration');
const login  = require('./routes/login');
const getlist = require('./routes/list');

app.use('/',registration);
app.use('/',login);
app.use('/app/sites',getlist);

const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`server is running at http:localhost:${PORT}`);
})