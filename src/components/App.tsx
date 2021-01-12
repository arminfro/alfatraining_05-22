import { ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import BookList from "./BookList";
import BookDetails from "./BookDetails";
import Home from "./Home";
import Layout from "./Layout";

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/books/:isbn" element={<BookDetails />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
