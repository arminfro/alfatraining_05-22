import { ReactElement, useReducer } from "react";
import { Routes as RRDRoutes, Route, Navigate } from "react-router-dom";

import BookList from "./BookList";
import BookDetails from "./BookDetails";
import Home from "./Home";
import BookCreate from "./BookCreate";
import BookEdit from "./BookEdit";
import Cart from "./Cart";
import { initialStore, reducer } from "../store";

export default function Routes(): ReactElement {
  const [store, dispatch] = useReducer(reducer, initialStore);
  return (
    <RRDRoutes>
      <Route path="/books/new" element={<BookCreate />} />
      <Route path="/books/:isbn/edit" element={<BookEdit />} />
      <Route
        path="/books/:isbn"
        element={<BookDetails dispatch={dispatch} />}
      />
      <Route path="/books" element={<BookList />} />
      <Route
        path="/cart"
        element={<Cart dispatch={dispatch} store={store} />}
      />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </RRDRoutes>
  );
}
