//está implementando un contexto y un reducer en React para gestionar el estado de un contador de manera global, lo que permite que varios componentes puedan acceder y modificar el estado del contador sin necesidad de pasar props de un componente a otro. Vamos a desglosarlo para entender cada parte:


import { createContext, useReducer, useContext } from "react";
//createContext() crea un contexto en React, que es una forma de compartir datos entre componentes sin tener que pasar props manualmente a través de cada nivel de la jerarquía de componentes. En este caso, el contexto es para compartir el estado del contador (count) y la función dispatch (que se usa para enviar acciones al reducer).
const initialState = { count: 0 };
const counterContext = createContext();

function counterReducer(state, action) {//funcion parametros
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <counterContext.Provider value={{ state, dispatch }}>
      {children}
    </counterContext.Provider>
  );
}

// Optional: custom hook for easy access
export const useCounter = () => useContext(counterContext);
