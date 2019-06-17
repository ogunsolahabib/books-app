import React from "react";
import { Link } from "react-router-dom";
const Book = props => {
  const info = {
    title: props.data.volumeInfo.title,
    author: props.data.volumeInfo.authors
      ? props.data.volumeInfo.authors[0]
      : "Author",
    image: props.data.volumeInfo.imageLinks
      ? props.data.volumeInfo.imageLinks.thumbnail
      : "https://via.placeholder.com/300x350.jpg",
    id: props.data.id
  };
  return (
    <div className="ui card">
      <div className="image section-image">
        <img src={info.image} alt={info.title} />
      </div>
      <div className="content">
        <h3 className="header">{info.title}</h3>
        <div className="book-author">
          By <span className="title">{info.author}</span>
        </div>
      </div>
      <Link to={"/books/" + info.id} className="ui bottom attached button">
        DETAILS
      </Link>
    </div>
  );
};
export default Book;
