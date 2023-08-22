const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminROutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const error404Routes=require("./controllers/error404")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminROutes);
app.use(shopRoutes);

app.use(error404Routes);

app.listen(3000);
