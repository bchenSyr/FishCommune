import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Landing from "./components/layout/landing";
import Map from "./mapComponents/map";
import Register from "./components/register";
import Login from "./components/auth/Login";

// import Register from "./components/register";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { curRoute: "null" };
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/map" component={Map} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
