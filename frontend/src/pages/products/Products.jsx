import React from "react";
import "./products.css";

// import CourseCard from "../../components/courseCard/courseCard";
import { ProductData } from "../../context/ProductContext";
import ProductCard from "../../components/productCard/ProductCard";

const Products = () => {
  const { products } = ProductData();

  console.log(products);
  return (
    <div className="courses">
      <h2>Available Materials</h2>

      <div className="course-container">
        {products && products.length > 0 ? (
          products.map((e) => <ProductCard key={e._id} product={e} />)
        ) : (
          <p>No Materials Yet!</p>
        )}
      </div>
    </div>
  );
};

export default Products;
