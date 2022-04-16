//create "images" route
import express from 'express';
import resizePic from '../sharp';
const images = express.Router();

images.get('/', (req, res) => {
  console.log('testing images resize pic');
 const inputName: string = req.query.filename as string;
  console.log(inputName)
  const width: number = (req.query.width as unknown) as number;
  const height: number = (req.query.height as unknown) as number;

  resizePic(inputName, width, height);

  res.send('images is working!');
});

export default images;
