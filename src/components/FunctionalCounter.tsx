import { ReactElement, useState } from "react";

function FunctionalCounter(): ReactElement {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter((currentCounter) => currentCounter + 1);
  };

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
