import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateData = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const POSTDATA = await axios({
        method: "PUT",
        url: "http://localhost:5000/update/60ac9c062895732bccdf2266",
        data: {
          email,
        },
      });

      console.log(POSTDATA);
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div>
      <div className="container my-3">
        <form onSubmit={handleSubmit} method="PUT">
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <button type="submit" class="btn btn-outline-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateData;
