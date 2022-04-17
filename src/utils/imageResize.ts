import sharp from 'sharp';

//need to get this info from the URL eventually
const resizePic = async (
  filename: string,
  width: number,
  height: number
): Promise<sharp.OutputInfo | undefined> => {
  try {
    const newFilename: string =  'src/assets/' + filename + '.jpg';
    console.log(newFilename);
    const outputName = 'src/thumbs/' + filename + '_thumb.jpg';
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
