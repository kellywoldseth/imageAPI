"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//received help from Daniel H on Udacity's Knowledge portal
var fs_1 = __importDefault(require("fs"));
/**
 * Function to resize an image
 * @param filename - name of the file with the .jpg extension
 * @return boolean - true if the file name exists in the assets folder, false otherwise
 */
function fileExistsInAssets(filename) {
    try {
        fs_1.default.accessSync('src/assets/' + filename);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.default = fileExistsInAssets;
