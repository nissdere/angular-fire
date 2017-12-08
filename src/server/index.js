const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');

const root = './';
const port = process.env.PORT || '3000';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'dist')));
app.use('/api', routes);
app.get('*', (req, res) => {
  res.sendFile('dist/index.html', {root: root});
});

app.listen(port, () => console.log(`API running on localhost:${port}`));