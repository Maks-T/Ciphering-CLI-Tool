const { chiperData } = require("./../chiper-module");

describe("Encode and Decode transformData", () => {
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
