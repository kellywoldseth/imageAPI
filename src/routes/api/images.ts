//This file creates the '/images' endpoint

import express from 'express';
import sharp from 'sharp';
import resizePic from '../../utils/imageResize';
import path from 'path';
import fileExistsInAssets from '../../utils/fileExistsInAssets';
import fileExistsInThumbs from '../../utils/fileExistsInThumbs';

const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response): void => {
  const errorMessage =
    'Please put valid parameters into the URL. Revisit the home page at http://localhost:3000/ to see how to use the api properly.';
  //parse querty parameters
  const inputName: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as unknown as string);
  const height: number = parseInt(req.query.height as unknown as string);
  //check to see if endpoint is accessed with no parameters or invalid parameters
  if (
    !fileExistsInAssets(inputName + '.jpg') ||
    inputName.length == 0 ||
    width <= 0 ||
    height <= 0 ||
    isNaN(width) ||
    isNaN(height)
  ) {
    res.send(errorMessage);
  }

  //valid parameters should result in an image displayed the picture on server
  try {
    const pathName: string = inputName + width + 'x' + height + '.jpg';

    //check if file already exists in cache
    if (!fileExistsInThumbs(inputName, width, height)) {
      //call resizePic function to save picture to thumbs folder
      resizePic(inputName, width, height).then((response) => {
        //display picture on server
        res.sendFile(path.resolve('thumbs', pathName));
      });
    } //file already exists - skip resize function and display directly on server
    else {
      res.sendFile(path.resolve('thumbs', pathName));
    }
  } catch (error) {
    res.send(errorMessage);
  }
});

export default images;
