import { Book } from "../types/Book";
import { reducer } from "./reducer";
import { Action } from "./actions";

// State type definition
export interface Store {
  cart: Book[];
}

const initialStore: Store = { cart: [] };

export { initialStore, reducer };

// re-export
export type { Action };
