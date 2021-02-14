import { Person } from "../Entity";
import { Age, FullName, Height, Weight } from "../ValueObject";

export interface PersonUpdateParams {
  name?: FullName;
  age?: Age;
  height?: Height;
  weight?: Weight;
}

export interface PersonRepositoryInterface {
  get: (personId: number) => Promise<Person>;
  create: (person: Person) => Promise<void>;
  update: (personId: number, params: PersonUpdateParams) => Promise<Person>;
  delete: (personId: number) => Promise<void>;
}
