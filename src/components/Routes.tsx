import { ReactElement } from "react";
import { Navigate, Route, Routes as RRDRoutes } from "react-router-dom";
import BookDetails from "./BookDetails";
import BookForm from "./BookForm";
import BookList from "./BookList";
import Home from "./Home";

export default function Routes(): ReactElement {
  return (
    <RRDRoutes>
      <Route path="/books/new" element={<BookForm />} />
      <Route path="/books/:isbn" element={<BookDetails />} />
      <Route path="/books" element={<BookList />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </RRDRoutes>
  );
}
