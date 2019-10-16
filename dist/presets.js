"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const f = __importStar(require("./wordMappingFunctions"));
exports.specificWordMappingArray = [
    f.Map_Fuc_To_Fwuc,
    f.Map_Mom_To_Mwom,
    f.Map_Me_To_Mwe,
    f.Map_NVowel_To_Ny,
    f.Map_Ove_To_Uv,
    f.Map_Haha_To_HehexD,
    f.Map_The_To_Teh,
];
exports.uvuMappingArray = [
    f.Map_O_To_OwO,
    f.Map_Ew_To_UwU,
    f.Map_Hey_To_Hay,
    f.Map_Dead_To_Ded,
    f.Map_N_Vowel_T_To_Nd,
];
exports.uwuMappingArray = [
    f.Map_Brackets_To_StarTrails,
    f.Map_PeriodCommaExclamationSemicolon_To_Kaomojis,
    f.Map_That_To_Dat,
    f.Map_Th_To_F,
    f.Map_Le_To_Wal,
    f.Map_Ve_To_We,
    f.Map_Ry_To_Wwy,
    f.Map_ROrL_To_W,
];
exports.owoMappingArray = [
    f.Map_Ll_To_Ww,
    f.Map_VowelOrRExceptO_L_To_Wl,
    f.Map_Old_To_Owld,
    f.Map_Ol_To_Owl,
    f.Map_LOrR_O_To_Wo,
    f.Map_SpecificConsonants_O_To_Letter_And_Wo,
    f.Map_VOrW_Le_To_Wal,
    f.Map_Fi_To_Fwi,
    f.Map_Ver_To_Wer,
    f.Map_Poi_To_Pwoi,
    f.Map_SpecificConsonants_Le_To_Letter_And_Wal,
];
