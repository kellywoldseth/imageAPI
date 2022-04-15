import express from 'express';

const images = express.Router();
const port = 3000;

images.get('/images', (req,res) =>{
    res.send('images is working!');
});

export default images;