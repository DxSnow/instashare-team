// importing the library
const express = require('express');
// referring to the instance of express with name app
const app = express();
const db = require('./config/keys.js');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const passport = require('passport');

// For any route, transform user's input to unicode.
app.use(express.urlencoded({ extended: true }));
//then  transform http to json
app.use(express.json());


//Passport configuration
app.use(passport.initialize());
require('./config/passport')(passport);


// @route GET
// @desc main webpage
// @access Public
app.get('/', (req, res) => res.send('Hello server'));

//if this path is called, to go this js --> calling to express to create routes to each folder
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//Connect to db
mongoose.connect(db.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
//promise statement

const port = 7000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
