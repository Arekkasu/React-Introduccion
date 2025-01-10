import { getAllByText, getByTestId, render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Prueba de <FirstApp", () => {
  // test("debe hacer match con el snapshot", () => {
  //   const title = "Hola soy Alex";
  //   //CONTAINER DEVUEVLE UN OBJETO DEL DOM
  //   const { container } = render(<FirstApp title={title} />);
  //   expect(container).toMatchSnapshot();
  // });

  test("debe mostrar el titulo en un h1", () => {
    const title = "Hola alex";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />,
    );
    // expect(getByText(title)).toBeTruthy()
    // EL INNER HTML ES COMO TAL EL CONTENIDO QUE TIENE
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });
  // test("Debe de mostrar el subtitulo del props", () => {
  //   const title = "Hola soy Alex";
  //   const subTitle = "Subitulo";
  //   //CONTAINER DEVUEVLE UN OBJETO DEL DOM
  //   const { container, getByText } = render(
  //     <FirstApp title={title} subTitle={subTitle} />,
  //   );
  //   expect(getAllByText(subTitle).length).toBe(1);
  // });
});
