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
        this.state = { cards, score: 0 }
        console.log(this.state.cards)
    }

    //componentDidMount()
    // render() {

    //method that will shuffle cards when one card is clicked
    //change clicked value from 0 to 1
    //if 1 then player loses
    //if 0 then score ++
    //cards.clicked will change
    //assign data value to each card = card id 
    //generate a random id for each image
    handleClick = id => {
        console.log(id)
        //has it been clicked
        let goodGuess = false
        let dontMessWithState = this.state.cards.map(card => {
            let newCard = card
            if (newCard.id === id) {
                if (newCard.clicked === 0) {
                    newCard.clicked = 1
                    goodGuess = true
                }
            }
            //console.log(newCard)
            //console.log(cards)
            console.log(this.state.score)
            return newCard
        });
        if (goodGuess) {
            const newScore = this.state.score + 1
            this.setState({
                cards: this.shuffleCards(dontMessWithState),
                score: newScore
            })
            // they got it right-set state
        } else {
            //they got it wrong- deal with that
            //reset all clicked properties to 0 from dontMessWithState
            //handle score
            this.setState({
                cards: this.shuffleCards(dontMessWithState),
                score: 0
            })
        }

        //if/else
    }
    shuffleCards = (array) => {
        for (let i = 0; i < array.length; i++) {
            const j = Math.floor(Math.random() * array.length)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp;

        }
        return array
    }
    // onClick={this.state.shuffleCards()
    render() {

        return (
            <Container>

                {this.state.cards.map(card => (
                    //call shuffleCards method in the onClick event
                    <Card id={card.id} source={card.source} handleClick={this.handleClick} key={card.id} />

                ))}
            </Container>

        )
    }

};

export default CardsContainer;