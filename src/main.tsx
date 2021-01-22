import React from "react";
import { createElement } from "react";
import { render } from "react-dom";
import { SubComponent } from "./sub-component";

export const App = () => {
  return (
    <div>
      <h1>Hello React!</h1>
      <SubComponent name="My Counter for TypeScript" />
    </div>
  );
};

render(createElement(App), document.getElementById("app"));
