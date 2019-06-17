import React from "react";
const BookDescription = props => {
  return (
    <div className="book-summary ui seven wide column">{props.description}</div>
  );
};
export default BookDescription;
