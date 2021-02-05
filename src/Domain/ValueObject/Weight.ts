export class Weight {
  private readonly _value: number;
  constructor(value: number) {
    if (value <= 0) {
      throw new Error(`不正な体重 : ${value}`);
    } else {
      this._value = value;
    }
  }

  get value() {
    return this._value;
  }

  get toString() {
    return `${this._value}kg`;
  }
}
