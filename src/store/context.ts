import { createContext, Dispatch } from "react";
import { Action, Store } from ".";

export interface StoreContext {
  store: Store;
  dispatch: Dispatch<Action>;
}

export const StoreContext = createContext({} as StoreContext);
