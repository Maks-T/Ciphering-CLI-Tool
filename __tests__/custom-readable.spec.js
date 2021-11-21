const { CustomReadable } = require("./../custom-readable");
jest.mock("fs");

describe("CustomReadable", () => {
  const fileName = "mock_file_name";

  test("проверить есть ли экземляр", () => {
    expect(new CustomReadable(fileName)).toBeInstanceOf(CustomReadable);
  });

  test("проверить записано ли имя файла", () => {
    const instanceCR = new CustomReadable(fileName);
    expect(instanceCR.filename).toBe(fileName);
  });

  test("проверить вызван ли метод _construct", () => {
    const instanceCR = new CustomReadable(fileName);
    const spyConstruct = jest.spyOn(instanceCR, "_construct");
    instanceCR._construct(() => {});
    expect(spyConstruct).toHaveBeenCalled();
  });

  test("проверить вызван ли метод _read", () => {
    const instanceCR = new CustomReadable(fileName);
    const spyRead = jest.spyOn(instanceCR, "_read");
    instanceCR._construct(() => {});
    instanceCR._read(1);
    expect(spyRead).toHaveBeenCalled();
  });

  test("проверить вызван ли метод _destroy", () => {
    const instanceCR = new CustomReadable(fileName);
    instanceCR._construct(() => {});
    instanceCR._read(100);
    const spyDestroy = jest.spyOn(instanceCR, "_destroy");
    instanceCR._destroy(((err) => {}, (cb) => {}));
    expect(spyDestroy).toHaveBeenCalled();
  });

  test("проверить вызван ли метод _read fd = null", () => {
    const instanceCR = new CustomReadable(fileName);
    const spyRead = jest.spyOn(instanceCR, "_read");
    instanceCR._construct(() => {});
    instanceCR.fd = null;
    instanceCR._read(1);
    expect(spyRead).toHaveBeenCalled();
  });

  test("проверить вызван ли метод _destroy", () => {
    const instanceCR = new CustomReadable(fileName);
    instanceCR._construct(() => {});
    instanceCR.fd = null;
    instanceCR._read(1);
    const spyDestroy = jest.spyOn(instanceCR, "_destroy");
    instanceCR._destroy(((err) => {}, () => {}));
    expect(spyDestroy).toHaveBeenCalled();
  });
});
