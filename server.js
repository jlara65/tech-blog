//import the modules.
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 1 * 60 * 1000, // check every 1 minute for expiration
    expiration: 5 * 60 * 1000 // will expire the session after 5 minutes
  }),
};

// middleware 
app.use(session(sess));

// set up handlebars.js engine instance with custom helpers
const hbs = exphbs.create({ helpers });

// set which template engine to use.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('New listening'));
});
