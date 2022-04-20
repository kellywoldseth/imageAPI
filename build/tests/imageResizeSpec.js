"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imageResize_1 = __importDefault(require("../utils/imageResize"));
//ADD DESCRIBE STATEMENTS
//this test works
it('valid paramaters should work', function () { return __awaiter(void 0, void 0, void 0, function () {
    var resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, imageResize_1.default)('fjord', 250, 380)];
            case 1:
                resp = _a.sent();
                expect(resp).toEqual('src/thumbs/fjord_thumb250x380.jpg');
                return [2 /*return*/];
        }
    });
}); });
//please help with this test. Related - should I my resizePic function return Promise<string> or something else?
it('invalid parameters with decimal values for numbers should give error', function () { return __awaiter(void 0, void 0, void 0, function () {
    var resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, imageResize_1.default)('fjord', 250.2, 380.9)];
            case 1:
                resp = _a.sent();
                expect(resp).toEqual('Expected Error: Expected positive integer for width but received 250.2 of type number');
                return [2 /*return*/];
        }
    });
}); });
//I think if I get the above test to work I can make this one work too
it('invalid parameter query with filename missing', function () { return __awaiter(void 0, void 0, void 0, function () {
    var resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, imageResize_1.default)('tree', 250, 380)];
            case 1:
                resp = _a.sent();
                expect(resp).toEqual('Expected Error: Input file is missing');
                return [2 /*return*/];
        }
    });
}); });
//---------This is everything I've already tried (plus more that was deleted) that I wwant to keep until I resolve my issues -------
/*
describe('test', function() {
    it('should resolve to something', function(done) {
      function resizePic('fjord', 250, 380) {
        expect(resizePic('fjord', 250, 380)).toBe('something');
        done();
      }
   
      const promise = something.withPromise();
      promise.then(resizePic('fjord', 250, 380), done.fail);
    });
  });
/*
/*
it('test resizePic when all parameters exist and are valid types', () => {
  expect(resizePic('fjord', 250, 380)).toBeTruthy(); //returned valid test even when I put fjord.jpg and file was not found, so this needs to change
});

it('test resizePic when all parameters exist and are valid types, including decimal number values', () => {
  expect(resizePic('fjord', 250.2, 380.8)).toBeTruthy(); //returned valid test even when I put fjord.jpg and file was not found, so this needs to change
});*/
//or rejected //or rejectedWith(new Error('Input file is missing););
/*
it('expects resolve', async () => {
    await resizePic('tree', 250, 380).toBeRejectedWith((new Error('Input file is missing'););
   });*/
/* returns fails because it returns undefined
it('test resizePic when filename does not exist -- throws an error and returns undefined', () =>{
    expect(resizePic('tree', 250, 380)).toBeFalsy(); //returned valid test even when I put fjord.jpg and file was not found, so this needs to change
  });*/
//because of typescript, it won't let me test this
/*it('test resizePic when width and/or height are not numbers -- throws an error and returns undefined', () =>{
    expect(resizePic('fjord', '250', '380')).toBeFalsy(); //returned valid test even when I put fjord.jpg and file was not found, so this needs to change
  });*/
/*
  it('expects asyncFun() result to equal value', async () => {
   return asyncFun().then(result =>'{
    expect(result).toBeResolved(value);
   });
  });*/
