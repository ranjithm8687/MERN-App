import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowProducts = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/products/${id}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" p-4">
      <BackButton />
      <h1 className=" text-3xl my-4">Show Products</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className=" flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Id</span>
            <span>{products._id}</span>
          </div>
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Title</span>
            <span>{products.title}</span>
          </div>
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Recommendation</span>
            <span>{products.author}</span>
          </div>
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Year</span>
            <span>{products.publishYear}</span>
          </div>
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(products.createdAt).toString()}</span>
          </div>
          <div className=" my-4">
            <span className=" text-xl mr-4 text-gray-500">
              Last Update Time
            </span>
            <span>{new Date(products.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowProducts;
