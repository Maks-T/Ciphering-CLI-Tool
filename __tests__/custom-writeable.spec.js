const { CustomWritable } = require("./../custom-writeable");
jest.mock("fs");

describe("CustomWritable", () => {
  const fileName = "mock_file_name";

  test("check if there is an instance of the Custom Writable class", () => {
    const instanceCW = new CustomWritable(fileName);
    expect(instanceCW).toBeInstanceOf(CustomWritable);
  });

  test("check if the file name is recorded", () => {
    const instanceCW = new CustomWritable(fileName);
    expect(instanceCW.filename).toBe(fileName);
  });

  test("check whether the _construct method is called", () => {
    const instanceCW = new CustomWritable(fileName);
    const spyConstruct = jest.spyOn(instanceCW, "_construct");
    instanceCW._construct(() => {});
    expect(spyConstruct).toHaveBeenCalled();
  });

  test("check whether the _write method is called", () => {
    const instanceCW = new CustomWritable(fileName);
    const spyRead = jest.spyOn(instanceCW, "_write");
    instanceCW._construct(() => {});
    instanceCW._write(1, "123", () => {});
    expect(spyRead).toHaveBeenCalled();
  });

  test("check whether the _destroy method is called", () => {
    const instanceCW = new CustomWritable(fileName);
    instanceCW._construct(() => {});
    instanceCW._write(1, "123", () => {});
    const spyDestroy = jest.spyOn(instanceCW, "_destroy");
    instanceCW._destroy(((err) => {}, (cb) => {}));
    expect(spyDestroy).toHaveBeenCalled();
  });
});
