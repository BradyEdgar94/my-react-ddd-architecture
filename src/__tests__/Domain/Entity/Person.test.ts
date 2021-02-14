import { Age, FullName, Height, Weight } from "../../../Domain/ValueObject";
import { Person } from "../../../Domain/Entity";

describe("Domain/Entity/Person", () => {
  const name = new FullName("firstName", "lastName");
  const age = new Age(25);
  const height = new Height(174);
  const weight = new Weight(68);
  const person = new Person(1, name, age, height, weight);

  test("Personが取得できる", () => {
    expect(person).toBeInstanceOf(Person);
  });

  test("Person.personIdでpersonIdが取得できる", () => {
    expect(person.personId).toBe(1);
  });
});
