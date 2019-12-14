import Word from './Word';

const faces: Array<string> = [
  '(・`ω´・)',
  ';;w;;',
  'owo',
  'UwU',
  '>w<',
  '^w^',
  '(* ^ ω ^)',
  '(⌒ω⌒)',
  'ヽ(*・ω・)ﾉ',
  '(o´∀`o)',
  '(o･ω･o)',
  '＼(＾▽＾)／',
];

export const Map_O_To_OwO = (input: Word): Word =>
  input.replace(/o/g, () => (Math.round(Math.random()) ? 'owo' : 'o'));
export const Map_Ew_To_UwU = (input: Word): Word => input.replace(/ew/g, 'uwu');
export const Map_Hey_To_Hay = (input: Word): Word =>
  input.replace(/([Hh])ey/g, '$1ay');
export const Map_Dead_To_Ded = (input: Word): Word =>
  input.replace(/Dead/g, 'Ded').replace(/dead/g, 'ded');
export const Map_N_Vowel_T_To_Nd = (input: Word): Word =>
  input.replace(/n[aeiou]*t/g, 'nd');
export const Map_Read_To_Wead = (input: Word): Word =>
  input.replace(/Read/g, 'Wead').replace(/read/g, 'wead');

export const Map_Brackets_To_StarTrails = (input: Word): Word =>
  input
    .replace(/[({<]/g, '｡･:*:･ﾟ★,｡･:*:･ﾟ☆')
    .replace(/[)}>]/g, '☆ﾟ･:*:･｡,★ﾟ･:*:･｡');
export const Map_PeriodCommaExclamationSemicolon_To_Kaomojis = (
  input: Word
): Word =>
  input
    .replace(
      /[.,](?![0-9])/g,
      () => ' ' + faces[Math.floor(Math.random() * faces.length)]
    )
    .replace(
      /[!;]+/g,
      () => ' ' + faces[Math.floor(Math.random() * faces.length)]
    );
export const Map_That_To_Dat = (input: Word): Word =>
  input.replace(/that/g, 'dat').replace(/That/g, 'Dat');
export const Map_Th_To_F = (input: Word): Word =>
  input.replace(/[Tt]h(?![Ee])/g, 'f').replace(/TH(?!E)/g, 'F');
export const Map_Le_To_Wal = (input: Word): Word =>
  input.replace(/le$/g, 'wal');
export const Map_Ve_To_We = (input: Word): Word =>
  input.replace(/ve/g, 'we').replace(/Ve/g, 'We');
export const Map_Ry_To_Wwy = (input: Word): Word => input.replace(/ry/g, 'wwy');
export const Map_ROrL_To_W = (input: Word): Word =>
  input.replace(/(?:r|l)/g, 'w').replace(/(?:R|L)/g, 'W');

export const Map_Ll_To_Ww = (input: Word): Word => input.replace(/ll/g, 'ww');
export const Map_VowelOrRExceptO_L_To_Wl = (input: Word): Word =>
  input.replace(/[aeiur]l$/g, 'wl').replace(/[AEIUR]([lL])$/g, 'W$1');
export const Map_Old_To_Owld = (input: Word): Word =>
  input.replace(/([Oo])ld/g, '$1wld').replace(/OLD/g, 'OWLD');
export const Map_Ol_To_Owl = (input: Word): Word =>
  input.replace(/([Oo])l/g, '$1wl').replace(/OL/g, 'OWL');
export const Map_LOrR_O_To_Wo = (input: Word): Word =>
  input.replace(/[lr]o/g, 'wo').replace(/[LR]([oO])/g, 'W$1');
export const Map_SpecificConsonants_O_To_Letter_And_Wo = (input: Word): Word =>
  input
    .replace(/([bcdfghjkmnpqstxyz])o/g, '$1wo')
    .replace(
      /([BCDFGHJKMNPQSTXYZ])([oO])/g,
      (_: any, m1: string, m2: string) =>
        m1 + (m2.toUpperCase() === m2 ? 'W' : 'w') + m2
    );
export const Map_VOrW_Le_To_Wal = (input: Word): Word =>
  input.replace(/[vw]le/g, 'wal');
export const Map_Fi_To_Fwi = (input: Word): Word =>
  input.replace(/([Ff])i/g, '$1wi').replace(/FI/g, 'FWI');
export const Map_Ver_To_Wer = (input: Word): Word =>
  input.replace(/([Vv])er/g, 'wer');
export const Map_Poi_To_Pwoi = (input: Word): Word =>
  input.replace(/([Pp])oi/g, '$1woi');
export const Map_SpecificConsonants_Le_To_Letter_And_Wal = (
  input: Word
): Word => input.replace(/([DdFfGgHhJjPpQqRrSsTtXxYyZz])le$/g, '$1wal');
export const Map_Consonant_R_To_Consonant_W = (input: Word): Word =>
  input.replace(/([BbCcDdFfGgKkPpQqSsTtWwXxZz])r/g, '$1w');
export const Map_Ly_To_Wy = (input: Word): Word =>
  input.replace(/ly/g, 'wy').replace(/Ly/g, 'Wy');
export const Map_Ple_To_Pwe = (input: Word): Word =>
  input.replace(/([Pp])le/g, '$1we');
export const Map_Nr_To_Nw = (input: Word): Word =>
  input.replace(/nr/g, 'nw').replace(/NR/g, 'NW');

export const Map_Fuc_To_Fwuc = (input: Word): Word =>
  input.replace(/([Ff])uc/g, '$1wuc');
export const Map_Mom_To_Mwom = (input: Word): Word =>
  input.replace(/([Mm])om/g, '$1wom');
export const Map_Me_To_Mwe = (input: Word): Word =>
  input.replace(/([Mm])e/g, '$1we');
export const Map_NVowel_To_Ny = (input: Word): Word =>
  input
    .replace(/n([aeiou])/g, 'ny$1')
    .replace(/N([aeiou])/g, 'Ny$1')
    .replace(/N([AEIOU])/g, 'NY$1');
export const Map_Ove_To_Uv = (input: Word): Word =>
  input.replace(/ove/g, 'uv').replace(/OVE/g, 'UV');
export const Map_Haha_To_HehexD = (input: Word): Word =>
  input.replace(/\b(ha|hah|heh|hehe)+\b/g, 'hehe xD');
export const Map_The_To_Teh = (input: Word): Word =>
  input.replace(/\b([Tt])he\b/g, '$1eh');
export const Map_You_To_U = (input: Word): Word =>
  input.replace(/\bYou\b/g, 'U').replace(/\byou\b/g, 'u');
export const Map_Time_To_Tim = (input: Word): Word =>
  input.replace(/\b([Tt])ime\b/g, '$1im');
export const Map_Over_To_Owor = (input: Word): Word =>
  input.replace(/([Oo])ver/g, '$1wor');
export const Map_Worse_To_Wose = (input: Word): Word =>
  input.replace(/([Ww])orse/g, '$1ose');
