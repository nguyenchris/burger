const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3000;

app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', 'views');

app.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});