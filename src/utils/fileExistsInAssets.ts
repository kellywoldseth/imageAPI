//received help from Daniel H on Udacity's Knowledge portal
import fs from 'fs';

function fileExistsInAssets(input: string): boolean {
  try {
    fs.accessSync('src/assets/' + input);
    return true;
  } catch (e) {
    return false;
  }
}

export default fileExistsInAssets;
