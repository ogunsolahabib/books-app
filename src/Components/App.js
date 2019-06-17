import React from "react";
import "../index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import BooksSectionPage from "../Pages/BooksSectionPage";
import BookDetailPage from "../Pages/BookDetailPage";
import PageNotFound from "../Pages/PageNotFound";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BooksSectionPage} />
          <Route
            path="/books/category/:categoryName"
            exact
            render={props => {
              const { categoryName } = props.match.params;
              return <BooksSectionPage categoryName={categoryName} />;
            }}
          />
          <Route
            path="/books/:bookID"
            exact
            render={props => {
              const { bookID } = props.match.params;
              return <BookDetailPage bookID={bookID} />;
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
