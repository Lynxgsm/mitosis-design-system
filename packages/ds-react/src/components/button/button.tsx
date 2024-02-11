"use client";
import * as React from "react";
import { useState } from "react";
import { ButtonProps } from "typings";

function Button(props: ButtonProps) {
  const [name, setName] = useState(() => "Hello Youth");

  return (
    <button
      className={`button button-lg ${props.backgroundColor} ${props.className}`}
    >
      {props.message || "Hello"}
      {name}! I can run in React, Vue, Solid or
    </button>
  );
}

export default Button;
