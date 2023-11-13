import { Link } from "react-router-dom";
import { PiCubeBold } from "react-icons/pi";
import { BiLike, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import ProductModal from "./ProductModal";
import { useState } from "react";

const ProductsSingleCard = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl ">
      <h2 className=" absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {products.publishYear}
      </h2>
      <h4 className=" my-2 text-gray-500">{products._id}</h4>
      <div className=" flex justify-start items-center gap-x-2">
        <PiCubeBold className=" text-red-300 text-2xl" />
        <h2 className=" my-1">{products.title}</h2>
      </div>
      <div className=" flex justify-start items-center gap-x-2">
        <BiLike className=" text-red-300 text-2xl" />
        <h2 className=" my-1">{products.author}</h2>
      </div>
      <div className=" flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          onClick={() => setShowModal(true)}
          className=" text-3xl text-blue-800 hover:text-black cursor-pointer"
        />
        <Link to={`/products/details/${products._id}`}>
          <BsInfoCircle className=" text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/products/edit/${products._id}`}>
          <AiOutlineEdit className=" text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/products/delete/${products._id}`}>
          <MdOutlineDelete className=" text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <ProductModal products={products} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ProductsSingleCard;
