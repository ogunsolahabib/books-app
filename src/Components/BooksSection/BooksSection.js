import React from "react";
import BooksContainer from "./BooksContainer";

const BooksSection = props => {
  if (props.list.length === 0) {
    return <h2>{"No books found for " + props.title}</h2>;
  }
  return (
    <section id="books-section">
      <div className="ui container">
        <h2>{props.title} Books</h2>
        <BooksContainer list={props.list} />
      </div>
    </section>
  );
};
export default BooksSection;
