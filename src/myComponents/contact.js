import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import axios from 'axios'

const Contact = () => {
  const [show, setShow] = useState(false);
  const [emai, setEmai] = useState('')
  const [message, setMessage] = useState('')
  // const handleSubmit = (e)=>{
  //    e.preventDefault();



  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setShow(true)

      const POSTDATA = await axios({
        method: "POST",
        url: 'http://localhost:5000/contact/',
        data: {
          emai,
          message,
        },
      })

      console.log(POSTDATA)
      setMessage('')
    } catch (error) {
      console.log(error)
    }

  }







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
        <form onSubmit={handleSubmit} method="POST">
          <div className="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
              value={emai}
              onChange={(e) => {
                setEmai(e.target.value)
              }}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              name="message"
              aria-describedby="emailHelp"
              placeholder="Enter Message"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
            />

          </div>


          <button type="submit" class="btn btn-outline-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;




