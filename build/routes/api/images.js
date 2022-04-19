"use strict";
//This file creates the '/images' endpoint
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageResize_1 = __importDefault(require("../../utils/imageResize"));
var path_1 = __importDefault(require("path"));
var images = express_1.default.Router();
images.get('/', function (req, res) {
    //parse querty parameters
    var inputName = req.query.filename;
    var width = parseInt(req.query.width);
    var height = parseInt(req.query.height);
    //call resizePic function
    var picResized = (0, imageResize_1.default)(inputName, width, height);
    //display the picture on server
    var pathName = inputName + '_thumb.jpg';
    res.sendFile(path_1.default.resolve('src', 'thumbs', pathName));
});
exports.default = images;
