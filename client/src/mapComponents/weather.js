import React from "react";

export default function weather(props) {
  console.log(props.location);
  return (
    <div>
      <li>{props.location}</li>
      <li>{props.main}</li>
      <li>{props.description}</li>
    </div>
  );
}
