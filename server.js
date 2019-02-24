const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();

const burgersRoutes = require('./controllers/burgers_controllers');


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(burgersRoutes);

app.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});