const express = require('express')

const app = express();
//IMPORT MODEL
const User = require('./models/Users')
//TO FIX PROBPLEM PETWEEN CLIENT AND SERVER
const cors = require('cors')
app.use(cors())

//TO MAKE THE DATA SHOW IN REACT APP
app.use(express.json())
//URL GET DATA
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users)
})
//URL POST DATA
app.post('/new/users', async (req, res) => {
    const users = new User(req.body)
    await users.save()
    res.json(users)

})
//PORT
const port = 8000;
app.listen(port, () => {
    console.log(`localhost working in ${port}`)
})
//CONNECT WITH MONGO DB
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://UserName Here !:<Passwork Here !>@cluster0.nryicsp.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0")