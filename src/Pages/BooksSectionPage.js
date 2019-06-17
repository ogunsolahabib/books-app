import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";
import BooksSection from "../Components/BooksSection/BooksSection";
import Axios from "axios";

class BooksSectionPage extends React.Component {
  state = { books: [], isLoading: true, hasError: null };
  checkReady() {
    if (this.state.isLoading) {
      return <Loader />;
    } else if (this.state.hasError) {
      return this.state.hasError;
    } else {
      return (
        <BooksSection title={this.props.categoryName} list={this.state.books} />
      );
    }
  }
  render() {
    return (
      <div className="ui container">
        <Header />
        {this.checkReady()};
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    const books_read_endpoint =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      this.props.categoryName +
      "&key=AIzaSyCZFYq5EVnvnoc6gegbZrgWhGr3zo_M_uA";
    Axios.get(books_read_endpoint)
      .then(response => {
        this.setState({ books: response.data.items, isLoading: false });
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
  componentDidUpdate(prevProps) {
    if (prevProps.categoryName !== this.props.categoryName) {
      this.setState({ isLoading: true });
      const books_read_endpoint =
        "https://www.googleapis.com/books/v1/volumes?q=" +
        this.props.categoryName +
        "&key=AIzaSyCZFYq5EVnvnoc6gegbZrgWhGr3zo_M_uA";
      Axios.get(books_read_endpoint).then(response => {
        this.setState({ books: response.data.items, isLoading: false }).catch(
          error =>
            error
              ? this.setState({
                  isLoading: false,
                  hasError: <ErrorMessage />
                })
              : null
        );
      });
    }
  }
}
BooksSectionPage.defaultProps = {
  categoryName: "JavaScript"
};
export default BooksSectionPage;
