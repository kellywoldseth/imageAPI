var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
DisplayProcessor,
    3;
SpecReporter,
    4;
StacktraceOption,
    5;
from;
'jasmine-spec-reporter';
6;
7;
8;
9;
var CustomProcessor = /** @class */ (function (_super) {
    __extends(CustomProcessor, _super);
    function CustomProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomProcessor.prototype.displayJasmineStarted = function (info, log) {
        11;
        return "".concat(log);
        12;
    };
    return CustomProcessor;
}(DisplayProcessor));
14;
15;
jasmine.getEnv().clearReporters();
16;
17;
jasmine.getEnv().addReporter(18, new SpecReporter({
    19: spec
}, {
    20: displayStacktrace,
    StacktraceOption: StacktraceOption,
    : .NONE,
    21: 
}, 22, customProcessors, [CustomProcessor], 23), 24);
export {};
