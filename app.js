const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')

const app = express();
const port = process.env.PORT || 3000

// middleware
app.use(express.static('public'));
app.use(express.json())

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://stephenlai:tr272221@cluster0.3qh9v.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(port, () => console.log(`Server running on port ${port}`)))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes)