"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function interleaveArrays(a, b) {
    let arr = [];
    let observed = a;
    let other = b;
    let temp = null;
    while (observed.length > 0) {
        arr.push(observed.shift());
        temp = observed;
        observed = other;
        other = temp;
    }
    if (other.length > 0)
        arr.push(...other);
    return arr;
}
exports.default = interleaveArrays;
