const { arrEn, MAX_ALB_INDEX } = require("./constans");

const isUpperCase = (char) => {
  return char.toUpperCase() === char;
};

getShiftIndex = (indexChar, shift) => {
  let indexCharShift = indexChar + shift;

  indexCharShift =
    indexCharShift > MAX_ALB_INDEX
      ? indexCharShift - MAX_ALB_INDEX - 1
      : indexCharShift;

  indexCharShift =
    indexCharShift < 0 ? MAX_ALB_INDEX + indexCharShift + 1 : indexCharShift;

  return indexCharShift;
};

chiperIndexCharCaesarDecode = (indexChar) => {
  return getShiftIndex(indexChar, 1);
};

chiperIndexCharCaesarEncode = (indexChar) => {
  return getShiftIndex(indexChar, -1);
};

chiperIndexCharROT8Decode = (indexChar) => {
  return getShiftIndex(indexChar, 8);
};

chiperIndexCharROT8Encode = (indexChar) => {
  return getShiftIndex(indexChar, -8);
};

chiperIndexCharAtbash = (indexChar) => {
  return Math.abs(MAX_ALB_INDEX - indexChar); //change
};

chiperFun = (data, chiperIndexCharFun) => {
  const dataArr = data.split("");

  const transformDataArr = dataArr.map((char) => {
    const statusCase = isUpperCase(char);

    let trasformChar = char.toUpperCase();

    const indexChar = arrEn.findIndex((charEn) => charEn === trasformChar);

    let indexCharShift = null;

    if (indexChar >= 0) {
      indexCharShift = chiperIndexCharFun(indexChar);
    }

    if (indexCharShift != null) trasformChar = arrEn[indexCharShift];

    trasformChar = statusCase ? trasformChar : trasformChar.toLowerCase();

    return trasformChar;
  });

  return transformDataArr.join("");
};

chiperCharCaesarDecode = (data) => {
  return chiperFun(data, chiperIndexCharCaesarDecode);
};

chiperCharCaesarEncode = (data) => {
  return chiperFun(data, chiperIndexCharCaesarEncode);
};

chiperCharROT8Decode = (data) => {
  return chiperFun(data, chiperIndexCharROT8Decode);
};

chiperCharROT8Encode = (data) => {
  return chiperFun(data, chiperIndexCharROT8Encode);
};

chiperCharAtbash = (data) => {
  return chiperFun(data, chiperIndexCharAtbash);
};

const chiperData = (data, chiper) => {
  let transformData = data;

  switch (chiper) {
    case "C1": {
      transformData = chiperCharCaesarDecode(transformData);
      break;
    }
    case "C0": {
      transformData = chiperCharCaesarEncode(transformData);
      break;
    }
    case "A": {
      transformData = chiperCharAtbash(transformData);
      break;
    }
    case "R1": {
      transformData = chiperCharROT8Decode(transformData);
      break;
    }
    case "R0": {
      transformData = chiperCharROT8Encode(transformData);
      break;
    }
  }

  return transformData;
};

module.exports.chiperData = chiperData;
