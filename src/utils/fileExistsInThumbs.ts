//received help from Daniel H on Udacity's Knowledge portal
import fs from 'fs';

function fileExistsInThumbs(
  input: string,
  width: number,
  height: number
): boolean {
  try {
    fs.accessSync('src/thumbs/' + input + width + 'x' + height + '.jpg');
    return true;
  } catch (e) {
    return false;
  }
}

export default fileExistsInThumbs;
