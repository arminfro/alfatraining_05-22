import { ReactElement, useReducer } from "react";
import { initialStore, reducer, StoreContext } from ".";

interface Props {
  children: ReactElement;
}

export function StoreProvider(props: Props): ReactElement {
  const [store, dispatch] = useReducer(reducer, initialStore);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
}
