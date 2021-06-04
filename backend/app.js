const express = require('express');
const bodyParser = require('body-parser')
const db = require('./config/db').MONGODB
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path');
const stuffRoutes = require('./routes/stuff')
const userRoutes = require('./routes/user');
const multerConfig = require('./middleware/multer-config');

mongoose.connect(db)
//mongoose.connect('mongodb+srv://monem:123456789azerty@cluster0-vjmum.mongodb.net/test?retryWrites=true&w=majority',
//{
  // useNewUrlParser: true,
    //useUnifiedTopology: true
//})
.then(()=>console.log('connexion a Mongodb '))
.catch(()=>console.log('errour de connexion a Mongodb'))

const app = express();
//middleware cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})
//middeleware
app.use(bodyParser.json())
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;


