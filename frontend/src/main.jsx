import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { CourseContextProvider } from "./context/CourseContext.jsx";
import { ProductContextProvider } from "./context/ProductContext.jsx";


export const server = "http://localhost:5000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <CourseContextProvider>
        <ProductContextProvider>
        <App />
        </ProductContextProvider>
        </CourseContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
