import React from "react";

/* Display Footer */
export function Footer() {
  return (
    <footer style={{ paddingTop: "15px", paddingBottom: "5px" }}>
      <hr />
      <p>
        <a style={{ color: "dimgray" }} href="https://twitter.com/fatimamds99">
          Twitter
        </a>{" "}
        •{" "}
        <a
          style={{ color: "dimgray" }}
          href="https://www.linkedin.com/in/fatimamds/"
        >
          LinkedIn
        </a>{" "}
        •{" "}
        <a style={{ color: "dimgray" }} href="https://github.com/fatimamds">
          GitHub
        </a>
      </p>
    </footer>
  );
}

//style={{ backgroundColor: "whitesmoke" }}
