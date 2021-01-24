export const AgeBandType = {
  young: "未成年",
  adult: "成人",
  senior: "高齢",
} as const;
export type AgeBandType = typeof AgeBandType[keyof typeof AgeBandType];

export class Age {
  private readonly _value: number;
  constructor(value: number) {
    if (value < 0) {
      throw new Error(`不正な年齢 : ${value}`);
    } else {
      this._value = value;
    }
  }

  get value() {
    return this._value;
  }

  get toString() {
    return `${this._value}歳`;
  }

  get ageBand(): string {
    if (this.value < 20) {
      return AgeBandType.young;
    } else if (this.value > 64) {
      return AgeBandType.senior;
    } else {
      return AgeBandType.adult;
    }
  }
}
