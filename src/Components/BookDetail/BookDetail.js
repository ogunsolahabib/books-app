import React from "react";
import BookContainer from "./BookContainer";

const BookDetail = props => {
  return (
    <section id="book-detail">
      <BookContainer book={props.book} hasError={props.hasError} />
    </section>
  );
};
export default BookDetail;
