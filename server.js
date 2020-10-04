const express = require('express');
const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');
const forceDomain = require('forcedomain');

const PORT = process.env.PORT || 80;

app.use(
  forceDomain({
    hostname: 'pr.rosucheba.ru',
    port: 80,
    protocol: 'https',
  })
);

app.use(express.static(__dirname + '/dist'));

// Data parsing
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// field, uni, number, userName // question, contactWay, contact //userCity, userCountry
app.post('/email', (req, res) => {
  const {
    field,
    uni,
    number,
    userName,
    question,
    contactWay,
    contact,
    userCity,
    userCountry,
  } = req.body;
  console.log('Data: ', req.body);

  sendMail(
    field,
    uni,
    number,
    userName,
    question,
    contactWay,
    contact,
    userCity,
    userCountry,
    function (err, data) {
      if (err) {
        res.status(500).json({
          message: 'Sorry ^.^ Internal Error',
        });
      } else {
        res.json({
          message: 'Email sent 👍',
        });
      }
    }
  );
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => log('Server is starting on PORT, ', PORT));
