describe("Pruebas de componente", () => {
  test("Prueba no debe fallas", () => {
    //1. inicializacion
    const message1 = "Holamundo";
    //2. estimulo
    const message2 = message1.trim();
    //3. Asserts
    expect(message1).toBe(message2);
  });
});
