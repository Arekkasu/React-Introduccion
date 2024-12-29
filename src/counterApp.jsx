// esa es la reglas de los hooks minuscula+MayusculaPrimera
import { useState } from "react";
import PropTypes from "prop-types";

//La funcion sigue igual y no se renderiza de nuevo
function handleClick(event) {
  console.log(event);
}

export const CounterApp = ({ value }) => {
  // Acalara que por cada hook se rende
  //Referencua de variable, funcion para cambiar el estado
  const [counter, setCounter] = useState(value);
  const handleSuma = () => {
    // la funcion del state puede tener otra funcion adentro
    // pero el primer paramatro es la referencia de varaible dada en el use state
    console.log(value);
    setCounter(counter + 1);
    //OTRO
    // setCounter((c) => c + 1);
  };
  const handleResta = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      {/*  Haciendo evento handling en REACT*/}
      {/*  si se manda mas de dos valores en el contexto, si toca ahcer funcion
      anonima*/}
      {/* <button onClick={(event) => handleClick(event,value)}>a</button> */}
      <button onClick={handleSuma}>suma</button>
      <button onClick={handleResta}>resta</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
