const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');

const db = require('./config/connection');
const burgersRoutes = require('./controllers/burgers_controllers');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(burgersRoutes);

app.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});