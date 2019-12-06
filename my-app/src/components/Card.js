import React from "react";

function Card(props) {
    return (
        <img src={props.source} onClick={() => props.handleClick(props.id)} alt={props.id} style={{ height: '300px', width: "200px" }}></img>
    );
}

export default Card;
