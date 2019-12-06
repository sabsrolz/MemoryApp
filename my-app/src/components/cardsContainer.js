import React, { Component } from "react";
import Container from "./Container"
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import cards from "../cards.json"
console.log(cards)
class CardsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = cards;
    }

    //componentDidMount()
    // render() {

    //method that will shuffle cards when one card is clicked
    //change clicked value from 0 to 1
    //if 1 then player loses
    //if 0 then score ++
    //cards.clicked will change
    //assign data value to each card = card id 
    shuffleCards = () => { }
    render() {

        return (
            <Container>

                {this.state.map(card => (
                    //call shuffleCards method in the onClick event
                    <img
                        src={card.source} onClick={this.state.clicked = 1}
                    />

                ))}
            </Container>
        )
    }

};

export default CardsContainer;