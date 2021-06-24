import { ReactElement, useReducer } from "react";
import { initialStore, reducer, Store, StoreContext } from ".";

interface Props {
  children: ReactElement;
  store?: Store;
}

export function StoreProvider(props: Props): ReactElement {
  const [store, dispatch] = useReducer(
    reducer,
    props.store ? props.store : initialStore
  );

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
}
