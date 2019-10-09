import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
