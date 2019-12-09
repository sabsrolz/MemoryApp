import React from "react";

function Score(props) {
  return (
    <>
      <h3>Current Score: {props.currentScore}</h3>
      <h3>Top Score: {props.topScore} </h3>
    </>
  );
}

export default Score;
