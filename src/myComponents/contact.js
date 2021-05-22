import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [beforeSubmit, afterSubmit] = useState("");
  const [beforeSubmitP, afterSubmitP] = useState("");
  // const handleSubmit = (e)=>{
  //    e.preventDefault();

  if (show) {
    return (
      <div>
        <div className="container mt-4 ">
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>
              Congratulations!! your message has been submitted
            </Alert.Heading>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container my-3">
        <form onSubmit={() => setShow(true)}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
              value={beforeSubmit}
              onChange={(e) => {
                afterSubmit(e.target.value);
              }}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
              value={beforeSubmitP}
              onChange={(e) => {
                afterSubmitP(e.target.value);
              }}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>

          <input type="submit"></input>
        </form>
      </div>
    </>
  );
};

export default Contact;
