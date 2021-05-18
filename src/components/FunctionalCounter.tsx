import { ReactElement } from "react";
import { useCounter } from "../hooks/UseCounter";
import { useDocumentTitle } from "../hooks/UseDocumentTitle";
import { useInterval } from "../hooks/UseInterval";

function FunctionalCounter(): ReactElement {
  const [counter, onIncrement] = useCounter();
  useInterval(onIncrement);
  useDocumentTitle(`Counter: ${counter}`);

  return (
    <>
      <p>Functional Counter: {counter}</p>
      <button onClick={onIncrement} className="ui button">
        +
      </button>
    </>
  );
}

export default FunctionalCounter;
