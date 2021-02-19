import React from "react";
import { LinkButton } from "../atoms";

const Service = () => {
  return (
    <div>
      <h1>Service</h1>
      <LinkButton to="/" text="Home" />
      <LinkButton to="/about" text="About" />
    </div>
  );
};

export default Service;
