import { useContext } from "react";
import { StoreContext } from ".";

export const useStore = (): StoreContext => useContext(StoreContext);
