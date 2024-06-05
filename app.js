const express = require('express');
const products_routes = require('./routes/products.js');
const slugify = require('slugify');

// Server instantiation
const app = express();

// Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

// Midleware
app.use(express.json());
app.use('/', products_routes);

// Missatge de benvinguda original
const welcomeMessage = "Benvingut al servidor Express!";

// Missatge de benvinguda slugitzat amb asteriscs
const slugifiedMessage = slugify(welcomeMessage, { replacement: '*' });

// Ruta principal per mostrar el missatge de benvinguda slugitzat
app.get('/welcome', (req, res) => {
  res.send(slugifiedMessage);
});

// Server startup
app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
