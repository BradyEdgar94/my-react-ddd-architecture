import { FullName } from "../../../Domain/ValueObject";

describe("Domain/ValueObject/FullName", () => {
  test("firstNameが20字より大きい場合はエラーを吐く", () => {
    expect(
      () => new FullName("abcdefghijklmnopqrstuvwxyz", "lastName")
    ).toThrowError("不正な名前 : abcdefghijklmnopqrstuvwxyz");
    expect(new FullName("firstName", "lastName")).toBeInstanceOf(FullName);
  });

  test("lastNameが20字より大きい場合はエラーを吐く", () => {
    expect(
      () => new FullName("firstName", "abcdefghijklmnopqrstuvwxyz")
    ).toThrowError("不正な苗字 : abcdefghijklmnopqrstuvwxyz");
    expect(new FullName("firstName", "lastName")).toBeInstanceOf(FullName);
  });

  test("FullName.fullNameで氏名が取得できる", () => {
    const name = new FullName("firstName", "lastName");
    expect(name.fullName).toBe("firstName lastName");
  });

  test("FullName.firstNameで名前が取得できる", () => {
    const name = new FullName("firstName", "lastName");
    expect(name.firstName).toBe("firstName");
  });

  test("FullName.lastNameで苗字が取得できる", () => {
    const name = new FullName("firstName", "lastName");
    expect(name.lastName).toBe("lastName");
  });
});
