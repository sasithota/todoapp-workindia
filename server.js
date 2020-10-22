const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(express.json());



const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`server is running at http:localhost:${PORT}`);
})