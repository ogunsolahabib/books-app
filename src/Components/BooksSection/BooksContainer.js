import React from "react";
import Book from "./Book";
const BooksContainer = props => {
  return (
    <div className="ui cards">
      {props.list.map((cur, i) => {
        return <Book data={cur} key={i} />;
      })}
    </div>
  );
};
export default BooksContainer;
