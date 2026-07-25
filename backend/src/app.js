const express = require('express');
const cors = require('cors');
const testRoutes = require('./routes/test.routes');
const contactRoutes = require('./routes/contact.routes');
const errorHandler = require('./middleware/errorHandler');
const { API_PREFIX } = require('./config/constants');

const app = express();

app.use(cors());
app.use(express.json());

app.use(`${API_PREFIX}`, testRoutes);
app.use(`${API_PREFIX}`, contactRoutes);

app.use(errorHandler);

module.exports = app;
