import { Price } from "../../../Domain/ValueObject";

describe("Domain/ValueObject/Price", () => {
  test("0より小さい値が渡されたらエラーを吐く", () => {
    expect(() => new Price(-100)).toThrowError(new Error(`不正な金額 : -100`));
    expect(new Price(0)).toBeInstanceOf(Price);
    expect(new Price(100)).toBeInstanceOf(Price);
  });

  test("Price.valueで金額が取得できる", () => {
    const price = new Price(100);
    expect(price.value).toBe(100);
  });

  test("Price.toStringで円マークが付加された金額が取得できる", () => {
    const price = new Price(100);
    expect(price.toString).toBe(`￥${price.value}`);
  });
});
