import React from "react";
const BookDescription = props => {
  return (
    <div
      className="book-summary ui seven wide column"
      dangerouslySetInnerHTML={{__html: props.description}}
    />
  );
};
export default BookDescription;
