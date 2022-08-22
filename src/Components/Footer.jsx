import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          borderTop: "1px solid #5ECE7B",
          textAlign: "center",
          margin: "1rem",
          padding: "3px",
        }}
      >
        &copy; Copyright 2022 Built with
        <span role="img" aria-label="love">
          💚💛💖
        </span>{" "}
        by Belay Retta
      </footer>
    );
  }
}

export default Footer;
