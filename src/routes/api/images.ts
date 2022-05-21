//This file creates the '/images' endpoint

import express from 'express';
import sharp from 'sharp';
import resizePic from '../../utils/imageResize';
import path from 'path';

const images = express.Router();

images.get('/', (req, res) => {
  //parse querty parameters
  const inputName: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as unknown as string);
  const height: number = parseInt(req.query.height as unknown as string);

  //call resizePic function
  resizePic(inputName, width, height);

  //display the picture on server
  const pathName: string = inputName + '_thumb.jpg';

  //check to see if endpoint is accessed alone (empty inputName) or with parameters
  if (pathName == 'undefined_thumb.jpg') {
    const errorMessage =
      'Please put valid parameters into the URL. Revisit the home page at http://localhost:3000/ to see how to use the api properly.';
    res.send(errorMessage);
  } else {
    res.sendFile(path.resolve('src', 'thumbs', pathName));
  }
});

export default images;
