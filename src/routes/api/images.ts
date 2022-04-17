//create "images" route
import express from 'express';
import resizePic from '../sharp';
const images = express.Router();

images.get('/', (req, res) => {
  //this is correctly getting the query parameters
  const inputName: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as unknown as string);
  const height: number = parseInt(req.query.height as unknown as string);

  const newPic = resizePic(inputName, width, height);

  res.send('images is working!');
  //res.send(newPic);
});

export default images;
