import React from "react";
import history from "./history";
//import Jumbotron from "react-bootstrap/Jumbotron";

export function Welcome() {
  return (
    <div style={{ paddingTop: "50px" }}>
      <h4
        style={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Welcome
      </h4>
      <p>
        We're so happy you're here. Take some time to fill your details to help
        us learn better about your health conditions. We'll get you on track
        with your diet in no time.
      </p>

      <button
        type="submit"
        class="btn btn-dark"
        onClick={() => history.push("/userprofile")}
      >
        Take me There
      </button>
    </div>
  );
}

//display: "flex",
//flexDirection: "column"
