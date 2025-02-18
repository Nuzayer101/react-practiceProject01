import React from "react";

const Category = ({ category ,setCatname  }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Product Categories
      </h1>
      <ul className="space-y-3">
        {category.map((v, i) => (
          <li 
            onClick={() => setCatname(v.name) }
            key={i}
            className="bg-white text-black px-5 py-3 cursor-pointer rounded-lg transition-transform transform hover:scale-105 shadow-sm hover:shadow-md"
          >
            {v.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

