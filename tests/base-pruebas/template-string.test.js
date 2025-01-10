import { getSaludo } from "../../src/base-pruebas/02-template-string";
describe("Prueba en -2-remplate-string", () => {
  test("getSaludo debe retornar hola Alex", () => {
    const name = "Alex";
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`);
  });
});
