import express from 'express';
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('working!');
});
app.listen(port, function () {
    console.log('server started at http://localhost:${port}');
});
