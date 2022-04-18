//this file contains the function that resizes an image

import sharp from 'sharp';

/**
 * Function to resize an image
 * @param filename - name of the file without the .jpg extension
 * @param width - new width of the returned picture
 * @param height - new height of the returned picture
 * @return newPic - returns a new output file that has been resized and renamed
 * preconditions: filename must exist and width and height must be valid types (numbers). filename must be type .jpg.
 * postcondition: output file is displayed on server and saved in thumbs folder
 */
const resizePic = async (
  filename: string,
  width: number,
  height: number
): Promise<sharp.OutputInfo | undefined> => {
  try {
    const newFilename: string = 'src/assets/' + filename + '.jpg';
    const outputName = 'src/thumbs/' + filename + '_thumb' + width + 'x' + height + '.jpg';
    const newPic: sharp.OutputInfo = await sharp(newFilename)
      .resize(width, height)
      .toFile(outputName);
    return newPic;
  } catch (err) {
    console.log(`${err}`);
    return undefined;
  }
};

export default resizePic;
