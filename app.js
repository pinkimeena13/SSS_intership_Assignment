const express = require('express');

const port = 3000;
const app = express();

app.use('/user' , require('./routes/users'))

app.listen(port , ()=>{
    console.log(`App is Started at http://localhostL ${port}`);
})