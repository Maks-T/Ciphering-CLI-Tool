const { CustomWritable } = require("./../custom-writeable");
jest.mock("fs");

describe("CustomWritable", () => {
  const fileName = "mock_file_name";

  test("проверить есть ли экземляр CustomWritable", () => {
    const instanceCW = new CustomWritable(fileName);
    expect(instanceCW).toBeInstanceOf(CustomWritable);
  });

  test("проверить записано ли имя файла", () => {
    const instanceCW = new CustomWritable(fileName);
    expect(instanceCW.filename).toBe(fileName);
  });

  test("проверить вызван ли метод _construct", () => {
    const instanceCW = new CustomWritable(fileName);
    const spyConstruct = jest.spyOn(instanceCW, "_construct");
    instanceCW._construct(() => {});
    expect(spyConstruct).toHaveBeenCalled();
  });

  test("проверить вызван ли метод _write", () => {
    const instanceCW = new CustomWritable(fileName);
    const spyRead = jest.spyOn(instanceCW, "_write");
    instanceCW._construct(() => {});
    instanceCW._write(1, "123", () => {});
    expect(spyRead).toHaveBeenCalled();
  });

  test("проверить вызван ли метод _destroy", () => {
    const instanceCW = new CustomWritable(fileName);
    instanceCW._construct(() => {});
    instanceCW._write(1, "123", () => {});
    const spyDestroy = jest.spyOn(instanceCW, "_destroy");
    instanceCW._destroy(((err) => {}, (cb) => {}));
    expect(spyDestroy).toHaveBeenCalled();
  });

  /*
  test("проверить вызван ли метод READ", () => {
    const instanceCW = new CustomWritable(fileName);
    const spyRead = jest.spyOn(instanceCW, "read").mockImplementation();
    instanceCW.read();
    expect(spyRead).toHaveBeenCalled();
  });
*/
});
