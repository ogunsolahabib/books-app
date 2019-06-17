import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader";
import BookDetail from "../Components/BookDetail/BookDetail";

import Axios from "axios";
import ErrorMessage from "../Components/ErrorMessage";
class BookDetailPage extends React.Component {
  state = { book: {}, isLoading: true, hasError: null };
  componentDidMount() {
    Axios.get(
      "https://www.googleapis.com/books/v1/volumes/" + this.props.bookID
    )
      .then(response => {
        this.setState({ book: response.data, isLoading: false });
      })
      .catch(error =>
        error
          ? this.setState({
              isLoading: false,
              hasError: <ErrorMessage />
            })
          : null
      );
  }
  checkReady() {
    if (this.state.isLoading) {
      return <Loader />;
    } else if (this.state.hasError) {
      return this.state.hasError;
    } else {
      return <BookDetail book={this.state.book} />;
    }
  }
  render() {
    return (
      <div className="ui container">
        <Header />
        {this.checkReady()}

        <Footer />
      </div>
    );
  }
}

export default BookDetailPage;
