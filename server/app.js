const express = require('express');
const cors = require('cors');
const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on post ${port}...`));
