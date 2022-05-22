"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//received help from Daniel H on Udacity's Knowledge portal
var fs_1 = __importDefault(require("fs"));
/**
 * Function to check if an image exists in the thumbs folder
 * @param filename - name of the file without the .jpg extension
 * @param width - width of image
 * @param height - height of image
 * @return boolean - true if the file name exists in the assets folder, false otherwise
 */
function fileExistsInThumbs(filename, width, height) {
    try {
        fs_1.default.accessSync('src/thumbs/' + filename + width + 'x' + height + '.jpg');
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.default = fileExistsInThumbs;
