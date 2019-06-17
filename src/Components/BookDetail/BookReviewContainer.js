import React from "react";
const BookReviewContainer = props => {
  return (
    <div className="ui four wide column book-review-container">
      <span className="book-review">
        <i className="star icon" />
        <i className="star icon" />
        <i className="star icon" />
        <i className="star icon" />
        <i className="star half icon" />
      </span>
      {`(${props.ratingsCount})`}
    </div>
  );
};
export default BookReviewContainer;
