const { application } = require('express');
const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.json({message: 'haloooo'})
});

app.listen({ port }, () => console.log(`Server is running at ${port}`));
