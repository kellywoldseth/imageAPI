//this file contains the function that resizes an image

import sharp from 'sharp';
import path from 'path';
/**
 * Function to resize an image
 * @param filename - name of the file without the .jpg extension
 * @param width - new width of the returned picture
 * @param height - new height of the returned picture
 * @return newPic - returns a new output file that has been resized and renamed
 * preconditions: filename must exist and width and height must be valid types (numbers). filename must be type .jpg.
 * postcondition: output file is saved in thumbs folder
 */
const resizePic = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  try {
    const newFilenameInput: string = filename + '.jpg';
    const inputName: string = path.resolve(
      __dirname,
      '..',
      '..',
      'assets',
      newFilenameInput
    );
    const newFilenameOutput: string = filename + width + 'x' + height + '.jpg';
    const outputName: string = path.resolve(
      __dirname,
      '..',
      '..',
      'thumbs',
      newFilenameOutput
    );
    await sharp(inputName).resize(width, height).toFile(outputName);
    return outputName;
  } catch (err) {
    return (err as string).toString();
  }
};

export default resizePic;
