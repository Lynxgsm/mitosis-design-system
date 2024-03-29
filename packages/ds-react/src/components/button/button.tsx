"use client";
import * as React from "react";
import { useState } from "react";
import { ButtonProps } from "typings";
import "styles/dist/button.css";

function Button(props: ButtonProps) {
  const [name, setName] = useState(() => "Hello Youth");

  return (
    <button
      className={`ds-button button-${props.size ?? "md"} button-${
        props.backgroundColor ?? "black"
      } ${props.className ?? ""}`}
    >
      {props.message || "Hello"}
      {name}! I can run in React, Vue, Solid or
    </button>
  );
}

export default Button;
