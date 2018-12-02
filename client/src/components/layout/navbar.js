import React, { Component } from "react";

const navItem = {
  homeActive: {
    className: "nav-item active"
  },
  home: {
    className: "nav-item"
  }
};

export default class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { curRoute: null };
  }
  render() {
    return (
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
          {/* Navbar: left  */}
          <div className="navbar-collapse collapse w-75 order-2 order-md-0 navbarNavDropdown ml-5">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link " href="home">
                  <i className="fa fa-home d-none d-lg-inline" /> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="map">
                  <i className="fas fa-map-pin d-none d-lg-inline" /> Map
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="following">
                  <i className="fas fa-user-friends d-none d-lg-inline" />{" "}
                  Following
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="followers">
                  <i className="fas fa-user-friends d-none d-lg-inline" />{" "}
                  Follower
                </a>
              </li> */}
            </ul>
          </div>
          {/* Navbar: brand */}
          <div className="mx-auto order-0 order-md-1">
            <a className="navbar-brand" href="#">
              {" "}
              <i className="fas fa-fish" /> FishCommune{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navbarNavDropdown"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          {/* Navbar: right */}
          <div className="navbar-collapse collapse w-75 order-1 navbarNavDropdown mr-5">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Beier Chen
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="profile.html">
                    <i class="far fa-user-circle x-1" /> Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i class="fas fa-cog" /> Setting
                  </a>
                  <a className="dropdown-item" href="#">
                    <i class="fas fa-sign-out-alt x-1" /> Log out
                  </a>
                </div>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="notification.html">
                  <i className="fa fa-bell" style={{ fontSize: 20 + "px" }} />{" "}
                  <span
                    className="badge badge-notify"
                    style={{ fontSize: 13 + "px" }}
                  >
                    {" "}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

// shortcut:
// rfc - functional components
// rcc - class components
