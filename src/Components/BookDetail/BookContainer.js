import React from "react";
import BookDescription from "./BookDescription";
import BookReviewContainer from "./BookReviewContainer";
const BookContainer = props => {
  const bookInfo = {
    image: props.book.volumeInfo.imageLinks.large,
    title: props.book.volumeInfo.title,
    author: props.book.volumeInfo.authors[0],
    description: props.book.volumeInfo.description,
    ratings: {
      averageRating: props.book.volumeInfo.averageRating,
      ratingsCount: props.book.volumeInfo.ratingsCount
    }
  };
  const hasRating = () => {
    if (
      props.book.volumeInfo.averageRating &&
      props.book.volumeInfo.ratingsCount
    ) {
      return (
        <BookReviewContainer
          averageRating={bookInfo.ratings.averageRating}
          ratingsCount={bookInfo.ratings.ratingsCount}
        />
      );
    }
  };

  return (
    <div className="ui container stackable grid ">
      <div className="ui five wide column">
        <div className="ui card">
          <div className="image">
            <img src={bookInfo.image} alt={bookInfo.title} />
          </div>
          <div className="content">
            <h3 className="header">{bookInfo.title}</h3>
            <div className="book-author">
              By <span className="title">{bookInfo.author}</span>
            </div>
          </div>
        </div>
      </div>
      <BookDescription description={bookInfo.description} />
      {hasRating}
    </div>
  );
};
export default BookContainer;
