"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//received help from Daniel H on Udacity's Knowledge portal
var fs_1 = __importDefault(require("fs"));
function fileExistsInAssets(input) {
    try {
        fs_1.default.accessSync('src/assets/' + input);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.default = fileExistsInAssets;
