import { Weight } from "../../../Domain/ValueObject";

describe("Domain/ValueObject/Weight", () => {
  test("0より小さい値が渡されたらエラーを吐く", () => {
    expect(() => new Weight(-100)).toThrowError("不正な体重 : -100");
    expect(new Weight(100)).toBeInstanceOf(Weight);
  });

  test("Weight.valueで体重が取得できる", () => {
    const weight = new Weight(100);
    expect(weight.value).toBe(100);
  });

  test("Weight.toStringでcmが付加された体重を取得できる", () => {
    const weight = new Weight(100);
    expect(weight.toString).toBe(`${weight.value}kg`);
  });
});
