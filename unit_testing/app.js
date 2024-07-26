import express from 'express'

const port = 3000;
const app = express();

app.use('/user' , require('./routes/users'))

 module.exports = app.listen(port , ()=>{
    console.log(`App is Started at http://localhostL ${port}`);
})
export default app;