module.exports.arrEn = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

module.exports.MAX_ALB_INDEX = 25;

module.exports.encryptNames = {
  Caesar: "C",
  Atbash: "A",
  ROT8: "R",
};

const r = "\x1b[31m";
const w = "\x1b[37m";
const y = "\x1b[33m";

module.exports.messagesError = {
  numberOfConfigFlagExceeded: ` ${r}  ERROR! ${y}   Number of Config flags  exceeded ${w}`,
  configFlagsAreMissing: `${r} ERROR! ${y}  Сonfig flags are missing ${w}`,
  configIsIncorrect: `${r} ERROR! ${y}   The Config is incorrect ${w}`,
  argumentsAreMissing: `${r} ERROR! ${y}  Arguments are missing ${w}`,
  configIsMissing: `${r} ERROR! ${y} The Config is missing ${w}`,
  numberOfInputFlagFlagExceeded: `${r} ERROR! ${y}   Number of INPUT flags exceeded ${w}`,
  fileNameInputIsMissing: `${r} ERROR! ${y}   file name INPUT is missing ${w}`,
  numberOfOutputFlagFlagExceeded: `${r} ERROR! ${y}   Number of OUTPUT flags exceeded ${w}`,
  fileNameOutputIsMissing: `${r} ERROR! ${y}   file name OUTPUT is missing ${w}`,
};
