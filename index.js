
const proxy = require('express-http-proxy');
const app = require('express')();
const port = 3000;

let target = '';

app.get('/proxy', (req, res) => {
  res.send(target);
});

app.get('/proxy/:proxy', (req, res) => {
  target = req.params['proxy'];
  res.send(target);
});

app.use('/', proxy(() => target));

app.listen(port, () => {
  console.log(`:${port}`);
});
