import React from "react";
import { Link } from "react-router-dom";

export default function cards(props) {
  return (
    <div>
      <div className="container ">
        <div class="card">
          <img src={props.img1} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link button type="button" class="btn btn-primary" to="/contact">
              Click
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
