import React, { useState } from "react";
import { createElement } from "react";
import { render } from "react-dom";
import { Price } from "./Domain/ValueObject/Price";

export const App = () => {
  const [price, setPrice] = useState<Price>(new Price(0));
  const [input, setInput] = useState("");

  const handleClick = () => {
    const inputNum = Number(input);
    if (!inputNum) return;
    const inputPrice = new Price(Number(inputNum));
    setPrice(inputPrice);
  };

  return (
    <div>
      <h1>Hello React!</h1>
      <p>{price}</p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Input Price."
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

render(createElement(App), document.getElementById("app"));
