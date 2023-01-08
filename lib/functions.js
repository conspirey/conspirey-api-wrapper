"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getError = void 0;
function getError(error) {
    let array = error.split("_");
    let num = Number(array[array.length - 1]);
    array.pop();
    return {
        msg: array.join("_"),
        number: num
    };
}
exports.getError = getError;
//# sourceMappingURL=functions.js.map