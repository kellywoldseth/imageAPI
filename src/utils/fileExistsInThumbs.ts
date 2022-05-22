//received help from Daniel H on Udacity's Knowledge portal
import fs from 'fs';

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
    fs.accessSync('src/thumbs/' + filename + width + 'x' + height + '.jpg');
    return true;
  } catch (e) {
    return false;
  }
}

export default fileExistsInThumbs;
