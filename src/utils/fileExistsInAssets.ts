//received help from Daniel H on Udacity's Knowledge portal
import fs from 'fs';

/**
 * Function to check if an image exists in the assets folder
 * @param filename - name of the file with the .jpg extension
 * @return boolean - true if the file name exists in the assets folder, false otherwise
 */
function fileExistsInAssets(filename: string): boolean {
  try {
    fs.accessSync(__dirname + '/assets/' + filename);
    return true;
  } catch (e) {
    return false;
  }
}

export default fileExistsInAssets;
