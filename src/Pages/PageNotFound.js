import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
const PageNotFound = props => {
  return (
    <div className="ui container">
      <Header />
      <section id="page-not-found">
        <div className="ui container">
          <h1 className="header">404</h1>
          <p>page not found.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default PageNotFound;
