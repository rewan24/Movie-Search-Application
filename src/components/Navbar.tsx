// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Navbar: React.FC = () => {
  return (
//     <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
//       <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
//       <Link to="/search" style={{ color: "white" }}>Search</Link>
//     </nav>
//   );
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="beforeNav container-fluid">
    <Link className="link1 navbar-brand" to="#">Movie Search App</Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav1 navbar-nav">
        <li className="nav-item">
          <Link className="home-link nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="search-link nav-link" to="/search">Search</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/details">MovieDetails</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
