const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://ronaldkwan93:QuyqsnCT-VfFiw5@cluster0.zfomx6f.mongodb.net/")
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.post("/login", (req, res) => {
    const {email, password} = req.body 
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            } else {
                res.json("Email or Password is incorrect!")
            }
        } else {
            res.json("User doesn't exist!")
        }
    })
})

app.post('/register', (req, res)=> {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running!")
})