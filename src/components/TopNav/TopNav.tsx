import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import GraphComponent from "../GraphComponent/GraphComponent";
import TableComponent from "../TableComponent/TableComponent";
import "./TopNav.css";

function TopNav() {
  return (
    <>
      <div className="top-nav">
        <nav className="navigation">
          <ul className="list">
            <li className="list-items">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
                to="/graph"
              >
                Analysis
              </NavLink>
            </li>
            {/* <li>
              <Link className="Links" to="/products/2">
                Second Product
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<TableComponent />} />
        <Route path="/graph" element={<GraphComponent />} />
      </Routes>
    </>
  );
}

export default TopNav;
