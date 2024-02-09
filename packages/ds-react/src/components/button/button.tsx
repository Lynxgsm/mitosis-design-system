"use client";
import * as React from "react";
import { useState } from "react";
import { ButtonProps } from "typings";

function Button(props: ButtonProps) {
  const [name, setName] = useState(() => "Hello Youth");

  return (
    <div className={`button button-lg`}>
      {props.message || "Hello"}
      {name}! I can run in React, Vue, Solid or
    </div>
  );
}

export default Button;
