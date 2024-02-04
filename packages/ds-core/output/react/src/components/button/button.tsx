"use client";
import * as React from "react";
import { useState } from "react";

type Props = {
  message: string;
  backgroundColor: Color;
};
import { Color } from "typings";
import "./button.scss";

function DSEButton(props: Props) {
  const [name, setName] = useState(() => "Hello World");

  return (
    <div className={`button`}>
      {props.message || "Hello"}
      {name}! I can run in React, Vue, Solid or Svelte!
    </div>
  );
}

export default DSEButton;
