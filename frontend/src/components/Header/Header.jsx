// import React, { useState } from "react";
// import "./header.css";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

// const Header = ({ isAuth }) => {
//   const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); // Toggle the state
//   };

//   return (
//     <header className="header">
//       <div className="logo">NCCCC</div>

//       {/* Hamburger icon for mobile */}
//       <div className="hamburger" onClick={toggleMenu}>
//         {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>

//       {/* Links */}
//       <div className={`link ${menuOpen ? "nav-active" : ""}`}>
//         <Link to={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
//         <Link to={"/courses"} onClick={() => setMenuOpen(false)}>Courses</Link>
//         <Link to={"/notes"} onClick={() => setMenuOpen(false)}>Notes&Book</Link>
//         <Link to={"/image"} onClick={() => setMenuOpen(false)}>Image Gallery</Link>
//         <Link to={"/solutions"} onClick={() => setMenuOpen(false)}>NCERT SOLUTION</Link>
//         <Link to={"/result"} onClick={() => setMenuOpen(false)}>Results</Link>
//         <Link to={"/about"} onClick={() => setMenuOpen(false)}>About</Link>
//         {isAuth ? (
//           <Link to={"/account"} onClick={() => setMenuOpen(false)}>Account</Link>
//         ) : (
//           <Link to={"/login"} onClick={() => setMenuOpen(false)}>Login</Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

// eslint-disable-next-line react/prop-types
const Header = ({ isAuth }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu
  const [activeDropdown, setActiveDropdown] = useState(null); // State for active dropdowns

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null); // Close all dropdowns when menu toggles
  };

  const toggleDropdown = (dropdownName) => {
    // Toggle the clicked dropdown, close others
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header className="header">
      <div className="logo">NCCCC</div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Links */}
      <div className={`link ${menuOpen ? "nav-active" : ""}`}>
        <Link to={"/"} onClick={toggleMenu}>Home</Link>
        <Link to={"/courses"} onClick={toggleMenu}>Courses</Link>
        <Link to={"/notes"} onClick={toggleMenu}>Notes&Book</Link>
        <Link to={"/image"} onClick={toggleMenu}>Image Gallery</Link>

        {/* NCERT Dropdown */}
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown("ncert")}
          >
            NCERT SOLUTION
          </button>
          <div className={`dropdown-content ${activeDropdown === "ncert" ? "show" : ""}`}>
            <Link to={"/solutions/class-10"} onClick={toggleMenu}>Class 10</Link>
            <Link to={"/solutions/class-12"} onClick={toggleMenu}>Class 12</Link>
          </div>
        </div>

        {/* Results Dropdown */}
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown("result")}
          >
            Results
          </button>
          <div className={`dropdown-content ${activeDropdown === "result" ? "show" : ""}`}>
            <Link to={"/result/bbse"} onClick={toggleMenu}>Bihar Board</Link>
            <Link to={"/result/cbse"} onClick={toggleMenu}>CBSE</Link>
          </div>
        </div>

        <Link to={"/about"} onClick={toggleMenu}>About</Link>
        {isAuth ? (
          <Link to={"/account"} onClick={toggleMenu}>Account</Link>
        ) : (
          <Link to={"/login"} onClick={toggleMenu}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
