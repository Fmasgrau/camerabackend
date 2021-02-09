const express = require('express');
const cors = require('cors')

//Routes

const ValidationResponseRoutes = require('./Routes/api/ValidationResponse')



//MongoDB Connection

const mongoose = require('mongoose');

const { MONGO_URI } = require('./config');

mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
.then( () => console.log("Succesfully connected"))
.catch(err => console.log(err))


//Server
const https = require('https');
const fs = require('fs')



const app = express();
app.use(cors())

//Middleware

app.use(express.json({limit: '50mb'}))

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.use('/api/valresponse', ValidationResponseRoutes)



const PORT = process.env.PORT || 5000;



https.createServer({
    key: fs.readFileSync('./SSL/server.pem'),
    cert: fs.readFileSync('./SSL/server.pem')
}, app)
.listen(PORT, () => console.log(`server listen on port ${PORT}`))

// app.listen(PORT, () => console.log(`server listen on port ${PORT}`))