const express = require('express');
const mongoose = require('mongoose');
const apiroutes = require('./src/routes/api.routes');

mongoose.connect('mongodb://localhost:27017/tiendaDB2', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
app.use(express.json());


app.use('/api', apiroutes);

app.listen(3000, () => console.log('start app'));
