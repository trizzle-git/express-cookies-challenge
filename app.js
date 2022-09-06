const express = require('express');
const app = express();
var port = 8080;
var name = 'Tory';

var cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/', function (req, res) {
    res.send('Homepage')
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
  })

app.get('/login', function(req, res) {
    var opts = {
      maxAge: 900000
    };
    res.cookie(name, 'value', opts);
    res.end();
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
  })

  app.get('/hello', function(req, res) {
    res.send(`Welcome ${name}!`)
  })


app.listen(port, () => console.log(`Express Server listening at http://localhost:${port}`))