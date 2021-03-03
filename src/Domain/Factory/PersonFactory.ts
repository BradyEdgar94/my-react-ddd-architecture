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
  static createFromObj(person: PersonObj) {
    return new Person(
      person.person_id,
      new FullName(person.first_name, person.last_name),
      new Age(person.age),
      new Height(person.height),
      new Weight(person.weight)
    );
  }
}
