import { ReactElement, useEffect, useState } from "react";

function FunctionalCounter(): ReactElement {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(onIncrement, 1000);
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const defaultTitle = document.title;
    document.title = `Counter: ${counter}`;
    return () => {
      document.title = defaultTitle;
    };
  }, [counter]);

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
