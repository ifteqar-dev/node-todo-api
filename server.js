const http = require('http');
const express = require('express');
const app = express();
const itemsRouter = require('./routes/items');

app.use(express.json());
app.use('/items', itemsRouter);
app.use('/', function(req, res) {
    res.send('todo api works');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.log('Server listening on port '+port);
