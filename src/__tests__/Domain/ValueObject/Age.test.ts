import { Age, AgeBandType } from "../../../Domain/ValueObject";

describe("Domain/ValueObject/Age", () => {
  test("0より小さい値が渡されたらエラーを吐く", () => {
    expect(() => new Age(-10)).toThrowError("不正な年齢 : -10");
    expect(new Age(0)).toBeInstanceOf(Age);
    expect(new Age(10)).toBeInstanceOf(Age);
  });

  test("Age.valueで年齢が取得できる", () => {
    const age = new Age(10);
    expect(age.value).toBe(10);
  });

  test("Age.toStringで「〇歳」という文字列が取得できる", () => {
    const age = new Age(10);
    expect(age.toString).toBe("10歳");
  });

  test("Age.ageBandで年齢が属するAgeBandTypeが取得できる", () => {
    const youngAge = new Age(10);
    expect(youngAge.ageBand).toBe(AgeBandType.young);

    const adultAge = new Age(30);
    expect(adultAge.ageBand).toBe(AgeBandType.adult);

    const seniorAge = new Age(80);
    expect(seniorAge.ageBand).toBe(AgeBandType.senior);
  });

  test("AgeBandTypeから年齢区分が取得できる", () => {
    expect(AgeBandType.young).toBe("未成年");
    expect(AgeBandType.adult).toBe("成人");
    expect(AgeBandType.senior).toBe("高齢");
  });
});
