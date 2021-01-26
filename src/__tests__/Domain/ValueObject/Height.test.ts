import { Height } from "../../../Domain/ValueObject";

describe("Domain/ValueObject/Height", () => {
  test("0より小さい値が渡されたらエラーを吐く", () => {
    expect(() => new Height(-100)).toThrowError("不正な身長 : -100");
    expect(new Height(100)).toBeInstanceOf(Height);
  });

  test("Height.valueで身長が取得できる", () => {
    const height = new Height(100);
    expect(height.value).toBe(100);
  });

  test("Height.toStringでcmが付加された身長を取得できる", () => {
    const height = new Height(100);
    expect(height.toString).toBe(`${height.value}cm`);
  });
});
