"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Word_1 = __importDefault(require("./Word"));
const interleaveArrays_1 = __importDefault(require("./interleaveArrays"));
const presets_1 = require("./presets");
function owoify(v, level = "owo") {
    let whitespace = v.split(/[^\s]+/g);
    let words = v.split(/\s+/g).map(x => new Word_1.default(x));
    words = words.map(x => {
        x = presets_1.specificWordMappingArray.reduce((word, f) => f(word), x);
        switch (level) {
            case "uvu":
                x = presets_1.uvuMappingArray.reduce((word, f) => f(word), x);
            case "uwu":
                x = presets_1.uwuMappingArray.reduce((word, f) => f(word), x);
            case "owo":
                x = presets_1.owoMappingArray.reduce((word, f) => f(word), x);
            default:
                break;
        }
        return x;
    });
    return interleaveArrays_1.default(whitespace, words).join("");
}
exports.default = owoify;
