import { Book } from "../types/Book";
import { reducer } from "./reducer";
import { Action } from "./actions";
import { StoreContext } from "./context";
import {StoreProvider} from "./StoreProvider";
import { useStore } from "./use-store";

interface Store {
  cart: Book[];
}

const initialStore: Store = { cart: [] };

export { initialStore, reducer, StoreContext, StoreProvider, useStore };
export type { Action, Store };
