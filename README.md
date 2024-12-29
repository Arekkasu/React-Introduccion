# INTRODUCCION DE REACT
React es una librería declarativa y eficiente que trabaja mediante componentes.

### Ejemplo de código
```js
const divHeader = document.querySelector("#header");
// En JSX sería
const htmlAAgregar = <h1>Hola Mundo</h1>;

ReactDOM.render(htmlAAgregar, divHeader);
```

### ¿BABEL Y REACT?
Babel es una herramienta que permite que el código moderno de JavaScript sea compatible con todos los navegadores. Sin embargo, React no depende de Babel cuando se usa JSX, solo cuando se trabaja con JavaScript.

## ¿Qué es un componente React?
Pequeña pieza de código encapsulada y reutilizable que puede tener estado o no.

## ¿Qué es un estado?
Es la manera en que un componente responde a cambios en el tiempo.

## ¿Qué usar: Vite o Create-React-App?
A partir de React 18, se recomienda usar Vite por ser más rápido y eficiente.

```bash
npm create vite@latest
```

O

```bash
yarn create vite
```

**Nota:** Nunca combines Yarn y NPM.

## Hola Mundo:

Es importante configurar el archivo `main.jsx` o definir el punto de entrada principal de la aplicación React.

### 1. Importar los módulos
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
```

### 2. Crear un componente
Actualmente, en React se trabaja principalmente con funciones, no con clases.
```js
function App() {
  return <h1>Hola Mundo</h1>;
}
```

### 3. Usar React y ReactDOM
```js
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Separar los componentes
El primer componente de tu aplicación puede llamarse `App.jsx`. En este caso, el componente se encargará de renderizar un saludo:

```js
export function App() {
  return <h1>Hola Mundo</h1>;
}
```

Cabe destacar que puedes usar funciones de tipo flecha o funciones normales.

## ¿Cómo hacer un fragmento en el componente?
En React, los componentes deben tener un orden jerárquico. En lugar de agrupar todo en una sola etiqueta contenedora, se pueden usar fragmentos:

```js
export function App() {
  return (
    <>
      <h1>Hola Mundo</h1>
      <p>Subtítulo</p>
    </>
  );
}
```

## ¿Qué código de JavaScript puede renderizar React?
React puede renderizar todos los tipos de datos, excepto objetos. Los valores lógicos o vacíos generan una etiqueta vacía. Por ejemplo:

```js
const funcion = () => {
  return "Hola Mundo";
};
const objeto = {
  nombre: "Arekkasu",
  edad: 26,
};
const variable = "Soy una variable";

export const FirstApp = () => {
  return (
    <>
      <h1>{funcion()}</h1> {/* Imprime el return */}
      <h1>{JSON.stringify(objeto)}</h1> {/* Única forma de imprimir un objeto */}
      <h1>{variable}</h1>
    </>
  );
};
```

## ¿Qué son las propiedades (props)?
Las props son datos enviados a un componente que este utilizará. Se envían como objetos, y es buena práctica desestructurarlas en los parámetros del componente:

### main.jsx
```js
import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp title="Dato enviado como prop" />
  </React.StrictMode>
);
```

### FirstApp.jsx
```js
export const FirstApp = ({ title }) => {
  return <h1>{title}</h1>;
};
```

## ¿Cómo tipar las props sin usar TypeScript?
Para mejorar la experiencia de desarrollo, puedes usar la librería `prop-types` para definir el tipo de datos esperado:

### Instalación
Con NPM:
```bash
npm add prop-types
```
Con Yarn:
```bash
yarn add prop-types
```

### Uso en el componente
```js
import PropTypes from "prop-types";

export const FirstApp = ({ title }) => {
  return <h1>{title}</h1>;
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
};
```

## Añadir CSS
Puedes importar un archivo de estilos de la siguiente manera:

```js
import "./ruta/style.css";
```

## Eventos
En JavaScript, los eventos se manejan con una sintaxis extensa como esta:

```js
button.addEventListener("evento", funcion);
```

En React, se simplifica:

```js
<button onClick={funcion}>Suma</button>
```

Para obtener información del evento, puedes usar una arrow function:

```js
<button onClick={(event) => funcion(event, values)}>Suma</button>
```

# HOOKS
Los hooks son herramientas que proporciona React para manejar estados y ciclos de vida de los componentes.

# USESTATE
useState es un hook de React que te permite añadir una variable de estado a tu componente, permitiendo su manipulación.

## ¿Cómo usarlo?
El hook `useState` devuelve un arreglo con dos elementos: la variable de estado y una función para actualizarla. Se suele usar desestructuración para acceder a ambos valores. Por ejemplo:

### Implementación del hook
```js
import { useState } from "react";
```

### CounterApp
El componente `CounterApp` recibirá un valor inicial desde `main.jsx`.

#### Sin useState
```js
export const CounterApp = ({ value }) => {
  const handleSuma = () => {};
  const handleResta = () => {};
  const handleReset = () => {};

  return (
    <>
      <h1>Counter App</h1>
      <h2>{value}</h2>
      <button onClick={handleSuma}>Suma</button>
      <button onClick={handleResta}>Resta</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
```

#### main.jsx
```js
import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={0} />
  </React.StrictMode>
);
```

### Con useState
El hook `useState` simplifica el manejo del estado:

```js
const [contador, setContador] = useState(value);
```

El segundo elemento del arreglo (`setContador`) puede aceptar una función como argumento:

```js
setContador((prev) => prev + 1);
```

### Lógica del componente ajustada
```js
export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleSuma = () => setCounter(counter + 1);
  const handleResta = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleSuma}>Suma</button>
      <button onClick={handleResta}>Resta</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
```
