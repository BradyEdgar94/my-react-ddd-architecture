export class Price {
  private readonly _value: number;
  constructor(value: number) {
    if (value < 0) {
      throw new Error(`不正な金額 : ${value}`);
    } else {
      this._value = value;
    }
  }

  get value() {
    return this._value;
  }
}
