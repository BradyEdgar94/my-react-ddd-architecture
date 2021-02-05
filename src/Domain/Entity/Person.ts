import { Age, Height, Weight } from "../ValueObject";

export class Person {
  constructor(
    public readonly name: string,
    private readonly _age: Age,
    private readonly _height: Height,
    public readonly _weight: Weight
  ) {}

  get age() {
    return this._age.value;
  }

  get ageString() {
    return this._age.toString;
  }

  get ageBand() {
    return this._age.ageBand;
  }

  get height() {
    return this._height.value;
  }

  get heightString() {
    return this._height.toString;
  }

  get weight() {
    return this._weight.value;
  }

  get weightString() {
    return this._weight.toString;
  }
}
