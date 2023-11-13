import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditProducts = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/products/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check console");
        console.log(error);
      });
  }, []);
  const handleEditProducts = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/products/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Product Edit Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        //alert("An error happened. Please Check console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div className=" p-4">
      <BackButton />
      <h1 className=" text-3xl my-4"> Edit Products</h1>
      {loading ? <Spinner /> : ""}
      <div className=" flex flex-col border-2 border-sky-400 rounded-xl  w-[600px] p-4 mx-auto ">
        <div className=" my-4">
          <label
            className=" text-xl mr-4 text-gray-500"
            htmlFor="productsTitle"
          >
            Title
          </label>
          <input
            type="text"
            id="productsTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className=" my-4">
          <label className=" text-xl mr-4 text-gray-500" htmlFor="postRec">
            Recommendation
          </label>
          <input
            type="text"
            id="postRec"
            className=" border-2 border-gray-500 px-4 py-2 w-full"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className=" my-4">
          <label className=" text-xl mr-4 text-gray-500" htmlFor="postYear">
            Year
          </label>
          <input
            type="text"
            id="postYear"
            className=" border-2 border-gray-500 px-4 py-2 w-full"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <button
          type="button"
          className=" p-2 bg-sky-300 m-8"
          onClick={handleEditProducts}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProducts;
