import React from "react";
import { LinkButton } from "../atoms";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <LinkButton to="/about" text="About" />
      <LinkButton to="/service" text="Service" />
    </div>
  );
};

export default Home;
