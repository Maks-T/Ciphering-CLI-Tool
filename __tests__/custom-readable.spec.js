const { CustomReadable } = require("./../custom-readable");
jest.mock("fs");

describe("CustomReadable", () => {
  const fileName = "mock_file_name";

  test("check if there is an instance of the Custom Readable class", () => {
    expect(new CustomReadable(fileName)).toBeInstanceOf(CustomReadable);
  });

  test("check if the file name is recorded", () => {
    const instanceCR = new CustomReadable(fileName);
    expect(instanceCR.filename).toBe(fileName);
  });

  test("check whether the _construct method is called", () => {
    const instanceCR = new CustomReadable(fileName);
    const spyConstruct = jest.spyOn(instanceCR, "_construct");
    instanceCR._construct(() => {});
    expect(spyConstruct).toHaveBeenCalled();
  });

  test("check whether the _read method is called", () => {
    const instanceCR = new CustomReadable(fileName);
    const spyRead = jest.spyOn(instanceCR, "_read");
    instanceCR._construct(() => {});
    instanceCR._read(1);
    expect(spyRead).toHaveBeenCalled();
  });

  test("check whether the _destroy method is called", () => {
    const instanceCR = new CustomReadable(fileName);
    instanceCR._construct(() => {});
    instanceCR._read(100);
    const spyDestroy = jest.spyOn(instanceCR, "_destroy");
    instanceCR._destroy(((err) => {}, (cb) => {}));

    expect(spyDestroy).toHaveBeenCalled();
  });

  test("check whether the _destroy method is called with a null handle", () => {
    const instanceCR = new CustomReadable(fileName);
    instanceCR._construct(() => {});
    instanceCR.fd = null;
    instanceCR._read(1);
    const spyDestroy = jest.spyOn(instanceCR, "_destroy");
    instanceCR._destroy(((err) => {}, () => {}));

    expect(spyDestroy).toHaveBeenCalled();
  });
});
