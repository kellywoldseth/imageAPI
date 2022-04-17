//is this the correct place for the file?
//is sharp.ts an appropriate name?

import sharp, { Sharp } from 'sharp';
import { promises as fs } from 'fs'; //is this correct/needed?

//need to get this info from the URL eventually
const resizePic = async (
  filename: string,
  width: number,
  height: number
): Promise<void> => {
  //I think the return type is "sharp"- need to research how to do that
  try {
    //const newPic =
    const newFilename: string = __dirname + '/assets/' + filename + '.jpg';
    const outputName = __dirname + '/thumbs/' +filename + '_thumb.jpg';
    console.log(newFilename);
    const newPic = await sharp(newFilename)
      .resize(width, height)
      .toFile(outputName);
    //return newPic: sharp;
  } catch (err) {
    console.log(`${err}`);
  }
};

export default resizePic;
