import React from "react";
//import Jumbotron from "react-bootstrap/Jumbotron";
//display: "flex",
//flexDirection: "column"
export function HealthForm() {
  return (
    <form style={{ paddingTop: "50px" }}>
      <h4
        style={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Your Health Profile
      </h4>
      <p>Help us learn more about your health</p>

      <div
        className="form-group col-md-2"
        style={{
          position: "relative",
          left: "40%",
          right: "50%"
        }}
      >
        <label className="form-label">Name</label>
        <input className="form-control" placeholder="Enter Your Name" />
      </div>

      <div
        className="form-group col-md-2"
        style={{
          position: "relative",
          left: "40%",
          right: "50%"
        }}
      >
        <label className="form-label">Age</label>
        <input className="form-control" placeholder="Enter Your Age" />
      </div>

      <div
        className="form-group col-md-2"
        style={{
          position: "relative",
          left: "40%",
          right: "50%"
        }}
      >
        <label for="inputState">Primary Health Goal</label>
        <select id="inputState" class="form-control">
          <option selected>Choose</option>
          <option>Weight Loss</option>
          <option>Control Insulin Levels</option>
          <option>...</option>
          <option>...</option>
          <option>...</option>
        </select>
      </div>

      <div className="form-group">
        <small className="form-text text-muted">
          We'd love to send you some juicy feed in your inbox.
        </small>
        <input type="checkbox" class="form-check-input" />
        <label class="form-check-label">Subscribe to our Newsletter</label>
      </div>

      <button type="submit" class="btn btn-dark">
        Submit Profile
      </button>
    </form>
  );
}
