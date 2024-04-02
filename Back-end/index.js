const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('../Back-end/dbconfig/db');
const router= require('./routes/routes')

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());
db()
app.use('/',router)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
