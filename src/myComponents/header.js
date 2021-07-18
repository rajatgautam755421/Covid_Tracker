import React from "react";
import { Link } from "react-router-dom";

export default function header({ searchBar }) {
  return (
    <>
      <nav className="navbar container sticky-top navbar-expand-lg navbar-dark bg-dark ">
        <Link className="navbar-brand" to="/">
          Hami Nepal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link "
                to="/contact"
                tabindex="-1"
                aria-disabled="true"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cards">
                Cards
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/api">
                COVIDTracker
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chart">
                COVIDChart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update">
                Update
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
          </ul>
          {searchBar ? (
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
}
