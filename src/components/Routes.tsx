import { ReactElement } from "react";
import { Navigate, Route, Routes as RRDRoutes } from "react-router-dom";

import BookCreate from "./BookCreate";
import BookDetails from "./BookDetails";
import BookEdit from "./BookEdit";
import BookList from "./BookList";
import Cart from "./Cart";
import Home from "./Home";

export default function Routes(): ReactElement {
  return (
    <RRDRoutes>
      <Route path="/books/new" element={<BookCreate />} />
      <Route path="/books/:isbn/edit" element={<BookEdit />} />
      <Route path="/books/:isbn" element={<BookDetails />} />
      <Route path="/books" element={<BookList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </RRDRoutes>
  );
}
