import express from 'express';
var images = express.Router();
var port = 3000;
images.get('/images', function (req, res) {
    res.send('images is working!');
});
export default images;
