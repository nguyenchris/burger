const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;
const app = express();

const burgersRoutes = require('./controllers/burgers_controllers');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.engine("handlebars", expressHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, 'public')));

app.use(burgersRoutes);

app.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});