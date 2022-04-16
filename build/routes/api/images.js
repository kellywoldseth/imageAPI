"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images = express_1.default.Router();
var port = 3000;
images.get('/images', function (req, res) {
    res.send('images is working!');
});
exports.default = images;
