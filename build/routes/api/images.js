"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//create "images" route
var express_1 = __importDefault(require("express"));
var imageResize_1 = __importDefault(require("../../utils/imageResize"));
var images = express_1.default.Router();
images.get('/', function (req, res) {
    //this is correctly getting the query parameters
    var inputName = req.query.filename;
    var width = parseInt(req.query.width);
    var height = parseInt(req.query.height);
    var picresized = (0, imageResize_1.default)(inputName, width, height);
    //I think I need to use html to make the picture show up... look into this
    var htmlCode = '<img src = picresized>';
    res.send(htmlCode);
});
exports.default = images;
