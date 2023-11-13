import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import ProductsTable from "../components/home/ProductsTable";
import ProductsCard from "../components/home/ProductsCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/products")
      .then((response) => {
        setProducts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" p-4">
      <div className=" flex justify-center items-center gap-x-4">
        <button
          onClick={() => setShowType("table")}
          className=" bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
        >
          Table
        </button>
        <button
          onClick={() => setShowType("card")}
          className=" bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
        >
          Card
        </button>
      </div>

      <div className=" flex justify-between items-center">
        <h1 className=" text-3xl my-8">SKM Products List</h1>
        <Link to="/products/create">
          <MdOutlineAddBox className=" text-sky-800 text-4xl" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <ProductsTable products={products} />
      ) : (
        <ProductsCard products={products} />
      )}
    </div>
  );
};

export default Home;
