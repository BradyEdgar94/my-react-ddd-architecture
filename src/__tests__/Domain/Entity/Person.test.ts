import { Person } from "../../../Domain/Entity";
import { PersonFactory } from "../../../Domain/Factory";
import { personObj } from "../../MockObjects";

describe("Domain/Entity/Person", () => {
  const person = PersonFactory.factory(personObj);

  test("Personが取得できる", () => {
    expect(person).toBeInstanceOf(Person);
  });

  test("Person.personIdでpersonIdが取得できる", () => {
    expect(person.personId).toBe(1);
  });
});
