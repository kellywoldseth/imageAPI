"use strict";
//TODO
/*
----- write  & run tests
----- comments
---- delete debug code
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Create server
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var port = 5000;
app.use('/', index_1.default);
//start the Express server
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
