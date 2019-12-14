import * as f from './wordMappingFunctions';
import Word from './Word';

export const specificWordMappingArray: Array<(str: Word) => Word> = [
  f.Map_Fuc_To_Fwuc,
  f.Map_Mom_To_Mwom,
  f.Map_Time_To_Tim,
  f.Map_Me_To_Mwe,
  f.Map_NVowel_To_Ny,
  f.Map_Over_To_Owor,
  f.Map_Ove_To_Uv,
  f.Map_Haha_To_HehexD,
  f.Map_The_To_Teh,
  f.Map_You_To_U,
  f.Map_Read_To_Wead,
  f.Map_Worse_To_Wose,
];
export const uvuMappingArray: Array<(str: Word) => Word> = [
  f.Map_O_To_OwO,
  f.Map_Ew_To_UwU,
  f.Map_Hey_To_Hay,
  f.Map_Dead_To_Ded,
  f.Map_N_Vowel_T_To_Nd,
];
export const uwuMappingArray: Array<(str: Word) => Word> = [
  f.Map_Brackets_To_StarTrails,
  f.Map_PeriodCommaExclamationSemicolon_To_Kaomojis,
  f.Map_That_To_Dat,
  f.Map_Th_To_F,
  f.Map_Le_To_Wal,
  f.Map_Ve_To_We,
  f.Map_Ry_To_Wwy,
  f.Map_ROrL_To_W,
];
export const owoMappingArray: Array<(str: Word) => Word> = [
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
  f.Map_Consonant_R_To_Consonant_W,
  f.Map_Ly_To_Wy,
  f.Map_Ple_To_Pwe,
  f.Map_Nr_To_Nw,
];
