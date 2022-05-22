"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//received help from Daniel H on Udacity's Knowledge portal
var fs_1 = __importDefault(require("fs"));
function fileExistsInThumbs(input, width, height) {
    try {
        fs_1.default.accessSync('src/thumbs/' + input + width + 'x' + height + '.jpg');
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.default = fileExistsInThumbs;
