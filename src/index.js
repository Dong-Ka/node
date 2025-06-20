const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

const app = express();
const routes = require('./routes');
const PORT = process.env.APP_PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static assets (CSS, images, etc.)
app.use(express.static(path.join(__dirname, '../public')));

// View engine setup
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../src/resources/views'));

// Routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
