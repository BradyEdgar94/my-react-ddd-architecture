import { Age, Height, Weight } from "../../../Domain/ValueObject";
import { Person } from "../../../Domain/Entity";

describe("Domain/Entity/Person", () => {
  const age = new Age(25);
  const height = new Height(174);
  const weight = new Weight(68);
  const person = new Person("john", age, height, weight);

  test("Personが取得できる", () => {
    expect(person).toBeInstanceOf(Person);
  });

  test("Person.nameで名前が取得できる", () => {
    expect(person.name).toBe("john");
  });
});
