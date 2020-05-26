import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
        <Link
                to="/"
                style={{
                  fontFamily: "monospace",
                }}
                className="col s5 brand-logo center white-text"
              >
                Q
              </Link>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li>
            <Link
                to="/list"
                style={{
                  fontFamily: "monospace",
                }}
                className="col s5 white-text"
              >
                <i className="material-icons">calendar_view_day</i>
              </Link>
            </li>
            <li>
            <Link
                to="/board"
                style={{
                  fontFamily: "monospace",
                }}
                className="col s5 white-text"
              >
                <i className="material-icons">view_week</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
