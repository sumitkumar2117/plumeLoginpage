const express = require('express');
const env = require('dotenv');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors')



const app = express();

env.config();
const jwtSecret = process.env.JWT_SECRET;

app.use(express.json());
app.use(cookieParser());
app.use (
    cors ({
      origin: 'https://plume-loginpage.vercel.app',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: 'Authorization, token, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    })
  );


app.get('/test', (req,res)=>{
    res.json('test ok')
});

app.post('/login', (req,res) =>{
    const userID = req.body.userID;
    console.log("useriD",userID);
    console.log("secret",jwtSecret)
   jwt.sign( {userID}, jwtSecret, {}, (err, token) =>{
    console.log('token', token);
    res.cookie('token', token).status(201).json({
        id:userID,
    });
   })
})

app.post('/logout',(req,res) =>{
    res.cookie('token', '').json({});
})

 const server = app.listen(4000, ()=>{
    console.log("Server is running on port 4000")
 })