const express = require('express');
const app = express();

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const home = require('./routes/home');
const users = require('./routes/users');


// Middleware
console.log();
app.use(cors());
app.use(express.json());
app.use(helmet());
if (app.get('env') === 'development') app.use(morgan('dev'));


// Routes
app.use('/', home);
app.use('/users', users);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on post ${port}...`));
