import React from "react";

function Card(props) {
  return (
    <img
      src={props.source}
      onClick={() => props.handleClick(props.id)}
      alt={props.id}
      style={{ height: "100px", width: "100px" }}
    ></img>
  );
}

export default Card;
