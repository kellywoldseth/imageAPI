import sharp from 'sharp';

//need to get this info from the URL eventually
const resizePic = async (
  filename: string,
  width: number,
  height: number
): Promise<sharp.OutputInfo | undefined> => {
  //I think the return type is "sharp"- need to research how to do that
  try {
    //is assets and thumbs in an ok place?
    const newFilename: string = __dirname + '/assets/' + filename + '.jpg';
    const outputName = __dirname + '/thumbs/' + filename + '_thumb.jpg';
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
