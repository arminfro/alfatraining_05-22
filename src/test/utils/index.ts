import { books } from "./data";
import { matchSnapshot } from "./helper";
import { customRender, renderWithRouting } from "./render";

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render, renderWithRouting, matchSnapshot, books };
