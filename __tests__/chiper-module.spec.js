const { chiperData } = require("./../chiper-module");

describe("Encode and Decode transformData Error scenarios", () => {
  test("CaesarDecode 'ABC' ", () => {
    expect(chiperData("ABC", "C1")).toBe("BCD");
  });

  test("CaesarDecode 'XYZ' ", () => {
    expect(chiperData("XYZ", "C1")).toBe("YZA");
  });

  test("CaesarEncode 'ABC' ", () => {
    expect(chiperData("ABC", "C0")).toBe("ZAB");
  });

  test("ROT8Decode 'ABC' ", () => {
    expect(chiperData("ABC", "R1")).toBe("IJK");
  });

  test("ROT8Encode 'ABC' ", () => {
    expect(chiperData("ABC", "R0")).toBe("STU");
  });

  test("AtbashEncode 'ABC' ", () => {
    expect(chiperData("ABC", "A")).toBe("ZYX");
  });

  test("AtbashEncode '12абвabv' ", () => {
    expect(chiperData("12абвabv", "A")).toBe("12абвzye");
  });
});

describe("Encode and Decode transformData Success scenarios", () => {
  const getTrasformData = (cfg, td) => {
    cfg.split("-").forEach((chiper) => {
      td = chiperData(td, chiper);
    });

    return td;
  };
  const inputData = `This is secret. Message about "_" symbol!`;

  let config = "C1-C0-A-R1-R0-A-R0-R0-C1-A";
  let outputData = `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`;

  test(`
  cofig: '${config}';
  ------- 
  input: '${inputData}';
  ===
  output: '${outputData}'
   `, () => {
    let transformData = inputData;

    expect(getTrasformData(config, transformData)).toBe(outputData);
  });

  config = "C1-C1-R0-A";
  outputData = `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`;

  test(`
  cofig: '${config}';
  ------- 
  input: '${inputData}';
  ===
  output: '${outputData}'
   `, () => {
    let transformData = inputData;

    expect(getTrasformData(config, transformData)).toBe(outputData);
  });

  config = "A-A-A-R1-R0-R0-R0-C1-C1-A";
  outputData = `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`;

  test(`
  cofig: '${config}';
  ------- 
  input: '${inputData}';
  ===
  output: '${outputData}'
   `, () => {
    let transformData = inputData;

    expect(getTrasformData(config, transformData)).toBe(outputData);
  });

  config = "C1-R1-C0-C0-A-R0-R1-R1-A-C1";
  outputData = `This is secret. Message about "_" symbol!`;

  test(`
  cofig: '${config}';
  ------- 
  input: '${inputData}';
  ===
  output: '${outputData}'
   `, () => {
    let transformData = inputData;

    expect(getTrasformData(config, transformData)).toBe(outputData);
  });
});
