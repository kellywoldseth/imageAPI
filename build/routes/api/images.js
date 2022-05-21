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
    (0, imageResize_1.default)(inputName, width, height);
    //display the picture on server
    var pathName = inputName + '_thumb.jpg';
    //check to see if endpoint is accessed alone (empty inputName) or with parameters
    if (pathName == 'undefined_thumb.jpg') {
        var errorMessage = 'Please put valid parameters into the URL. Revisit the home page at http://localhost:3000/ to see how to use the api properly.';
        res.send(errorMessage);
    }
    else {
        res.sendFile(path_1.default.resolve('src', 'thumbs', pathName));
    }
});
exports.default = images;
