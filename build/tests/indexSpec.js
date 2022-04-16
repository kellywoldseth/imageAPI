"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
it('adds 2 nums', function () {
    var val = (0, index_1.default)(3, 4);
    expect(val).toBe(5);
});
it('adds 0 + 0 falsy', function () {
    expect((0, index_1.default)(0, 0)).toBeFalsy();
});
