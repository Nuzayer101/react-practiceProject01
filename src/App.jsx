import React, { useEffect, useState } from "react";
import Category from "./Category";
import axios from "axios";

const App = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [catname, setCatname] = useState("");

  const getCategory = () => {
    axios.get("https://dummyjson.com/products/categories")
      .then((res) => setCategory(res.data));
  };

  const getProducts = () => {
    axios.get("https://dummyjson.com/products")
      .then((res) => setProduct(res.data.products));
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  useEffect(() => {
    if (catname !== "") {
      axios
        .get(`https://dummyjson.com/products/category/${catname}`)
        .then((res) => setProduct(res.data.products));
    } else {
      getProducts();
    }
  }, [catname]);

  return (
    <>
      <div className="p-5">
        <div className="mx-auto max-w-[1330px]">
          <h1 className="text-center font-bold text-4xl mb-4">Product List</h1>

          <div className="grid grid-cols-[30%_auto] gap-8">
            <div className="px-6">
              <Category category={category} setCatname={setCatname} />
            </div>

            <div>
              <div className="grid grid-cols-3 gap-4">
                {product.map((item) => (
                  <ProductItem key={item.id} product={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

const ProductItem = ({ product }) => {
  return (
    <div className="shadow-2xl text-center font-bold gap-5 p-4">
      <img
        className="w-[100%] h-[250px] object-cover"
        src={product.thumbnail}
        alt={product.title}
      />
      <h2 className="text-lg">{product.title}</h2>
      <p className="text-green-600">${product.price}</p>
    </div>
  );
};
