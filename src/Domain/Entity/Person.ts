import { Age, FullName, Height, Weight } from "../ValueObject";

export class Person {
  constructor(
    private readonly _personId: number,
    private readonly _name: FullName,
    private readonly _age: Age,
    private readonly _height: Height,
    public readonly _weight: Weight
  ) {}

  get personId() {
    return this._personId;
  }

  get fullName() {
    return this._name.fullName;
  }

  get firstName() {
    return this._name.firstName;
  }

  get lastName() {
    return this._name.lastName;
  }

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
