"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function each(items, action) {
    if (items.length == 0)
        return Promise.resolve();
    if (action) {
        var result = action(items[0]);
        var _loop_1 = function (i) {
            result = result
                .then(function () { return action(items[i]); });
        };
        for (var i = 1; i < items.length; ++i) {
            _loop_1(i);
        }
        return result;
    }
    else {
        var result = items[0]();
        var _loop_2 = function (i) {
            result = result
                .then(function () { return items[i](); });
        };
        for (var i = 1; i < items.length; ++i) {
            _loop_2(i);
        }
        return result;
    }
}
exports.each = each;
//# sourceMappingURL=index.js.map