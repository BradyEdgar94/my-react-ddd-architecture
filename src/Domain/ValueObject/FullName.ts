export class FullName {
  private readonly _firstName: string;
  private readonly _lastName: string;

  constructor(firstName: string, lastName: string) {
    if (firstName.length > 20) {
      throw new Error(`不正な名前 : ${firstName}`);
    }
    if (lastName.length > 20) {
      throw new Error(`不正な苗字 : ${lastName}}`);
    }
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }
}
