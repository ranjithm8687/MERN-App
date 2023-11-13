import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateProducts from "./pages/CreateProducts";
import ShowProducts from "./pages/ShowProducts";
import EditProducts from "./pages/EditProducts";
import DeleteProducts from "./pages/DeleteProducts";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/create" element={<CreateProducts />} />
        <Route path="/products/details/:id" element={<ShowProducts />} />
        <Route path="/products/edit/:id" element={<EditProducts />} />
        <Route path="/products/delete/:id" element={<DeleteProducts />} />
      </Routes>
    </>
  );
};

export default App;
