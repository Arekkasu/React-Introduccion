//IMPORTAR LO TYPES
// import PropTypes from "prop-types";

// IMPORTANTE TODO CODIGO DE JS QUE NO REQUIERE TENER UN CAMBIO EN RENDERIZADO O ES ALGO FIJO
// DEBE ESTAR AFUERA DE LA FUNCION PARA EVITAR CARGAR.
// RECORDAR QUE NO SE PUEDE RENDERIZAR OBJETOS JS NI TAMPOCO UN ASYNC FUNCTION

const funcion = () => {
  return "Hola mundo";
};
// Lo similar a imporimir un objeto es asi
const objeto = {
  nombre: "Arekkasu",
  edad: 26,
};
// los props son como las comunicaciones de entre componente de contextos o informaciones
//lo mejor es destructurarlos y es un objeto
// los props es mejor con arrow function
export const FirstApp = ({ title = "Hola" }) => {
  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      <h1>{funcion()}</h1>
      <h1>{JSON.stringify(objeto)}</h1>
      <h1>First app</h1>
    </>
  );
};

// //DECLARARCION DE PROTYPES
// FirstApp.propTypes = {
//   title: PropTypes.string.isRequired,
// };
// //Decalaracion default props
// FirstApp.defaultProps = {
//   title: "Arekkasu",
// };
