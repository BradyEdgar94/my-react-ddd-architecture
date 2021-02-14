import { Person } from "../Entity";
import { Age, FullName, Height, Weight } from "../ValueObject";

export interface PersonObj {
  person_id: number;
  first_name: string;
  last_name: string;
  age: number;
  height: number;
  weight: number;
}

export class PersonFactory {
  static createFromObj(obj: PersonObj) {
    return new Person(
      obj.person_id,
      new FullName(obj.first_name, obj.last_name),
      new Age(obj.age),
      new Height(obj.height),
      new Weight(obj.weight)
    );
  }
}
