import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const NoBorder = {
    border: "0 none",
    boxShadow: "none"
  };
  return (
    <header id="header">
      <div
        style={NoBorder}
        className="ui centered grid stackable top fixed menu"
      >
        <Link className="four wide column" to="/">
          <div className="ui left header">
            <i className="book icon" />
            Books
          </div>
        </Link>
        <div
          style={NoBorder}
          className="ui right secondary pointing menu eight wide column categories"
        >
          <NavLink to="/books/category/JavaScript" className="link item">
            JavaScript
          </NavLink>
          <NavLink to="/books/category/Python" className="link item">
            Python
          </NavLink>
          <NavLink to="/books/category/PHP" className="link item">
            PHP
          </NavLink>
          <NavLink to="/books/category/Java" className="link item">
            Java
          </NavLink>
          <NavLink to="/books/category/Csharp" className="item">
            C#
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Header;
