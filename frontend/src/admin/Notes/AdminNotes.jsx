/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Layout from "../Utils/Layout";
import { useNavigate } from "react-router-dom";
// import { CourseData } from "../../context/CourseContext";
// import CourseCard from "../../components/coursecard/CourseCard";
import "./adminnotes.css";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";
import { ProductData } from "../../context/ProductContext";
import ProductCard from "../../components/productCard/ProductCard";

const AdminNotes = ({ user }) => {
  const navigate = useNavigate();

  // Redirect non-admin users to home page
  if (user?.role !== "admin") {
    navigate("/");
    return null;  // Return null to avoid rendering the component
  }

  // State hooks for form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState(null);
  const [imagePrev, setImagePrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  // Image change handler
  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePrev(reader.result);
        setImage(file);
      };
    }
  };

  // Fetch courses from context
  const { products, fetchproducts } = ProductData();

  // Form submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("price", price);
    myForm.append("createdBy", createdBy);
    myForm.append("duration", duration);
    myForm.append("file", image);

    try {
      const { data } = await axios.post(`${server}/api/Product/new`, myForm, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      toast.success(data.message);
      setBtnLoading(false);
      fetchproducts(); // Refresh the course list

      // Reset the form fields
      setTitle("");
      setDescription("");
      setPrice("");
      setCreatedBy("");
      setDuration("");
      setImage(null);
      setImagePrev("");
      setCategory("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
      setBtnLoading(false);
    }
  };

  return (
    <Layout>
      <div className="admin-notes">
        <div className="left">
          <h1>All Materials</h1>
          <div className="dashboard-content">
            {products && products.length > 0 ? (
              products.map((products) => (
                <ProductCard key={products._id} products={products} />
              ))
            ) : (
              <p>No Materials Yet</p>
            )}
          </div>
        </div>

        <div className="right">
          <div className="add-product">
            <div className="product-form">
              <h2>Add Material</h2>
              <form onSubmit={submitHandler}>

                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />

                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />

                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />

                <label htmlFor="createdBy">Created By</label>
                <input
                  id="createdBy"
                  type="text"
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                  required
                />

                <label htmlFor="category">Category</label>
                <input
                  id="category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />

                <label htmlFor="duration">Duration (hours)</label>
                <input
                  id="duration"
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />

                <label htmlFor="file">Image</label>
                <input
                  id="file"
                  type="file"
                  onChange={changeImageHandler}
                  required
                />
                {imagePrev && <img src={imagePrev} alt="Preview" width={300} />}

                <button
                  type="submit"
                  disabled={btnLoading}
                  className="common-btn"
                >
                  {btnLoading ? "Please Wait..." : "Add"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminNotes;
