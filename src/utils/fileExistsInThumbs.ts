//received help from Daniel H on Udacity's Knowledge portal
import fs from 'fs';
import path from 'path';
/**
 * Function to check if an image exists in the thumbs folder
 * @param filename - name of the file without the .jpg extension
 * @param width - width of image
 * @param height - height of image
 * @return boolean - true if the file name exists in the assets folder, false otherwise
 */
function fileExistsInThumbs(
  filename: string,
  width: number,
  height: number
): boolean {
  try {
    const newFilename: string = filename + width + 'x' + height + '.jpg';
    fs.accessSync(path.resolve(__dirname, '..', '..', 'thumbs', newFilename));
    return true;
  } catch (e) {
    return false;
  }
}

export default fileExistsInThumbs;
