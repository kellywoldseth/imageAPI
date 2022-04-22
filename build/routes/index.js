"use strict";
//create router
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./api/images"));
var path_1 = __importDefault(require("path"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.sendFile(path_1.default.resolve('src', 'routes', 'index.html'));
});
routes.use('/images', images_1.default);
exports.default = routes;
