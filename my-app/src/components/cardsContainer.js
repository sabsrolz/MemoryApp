import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import Score from "./score";
import Message from "./message";
import cards from "../cards.json";
import "./cardsContainer.css";
let scores = [0];

//console.log(cards);
class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards,
      Score: { currentScore: 0, topScore: 0 },
      Message: { message: "Please click on an image" }
    };
    //console.log(this.state.cards);
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
    let topScoreCounter;

    //console.log(id)
    //has it been clicked
    let goodGuess = false;
    let dontMessWithState = this.state.cards.map(card => {
      let newCard = card;
      if (newCard.id === id) {
        if (newCard.clicked === 0) {
          newCard.clicked = 1;
          goodGuess = true;
        }
      }
      //console.log(newCard)
      //console.log(cards)

      return newCard;
    });

    if (goodGuess) {
      //console.log(scores);
      const newScore = this.state.Score.currentScore + 1;
      topScoreCounter = Math.max(...scores);
      console.log(topScoreCounter);
      this.setState({
        cards: this.shuffleCards(dontMessWithState),
        Score: { currentScore: newScore, topScore: topScoreCounter },
        Message: { message: "Please click on another image" }
      });
      // they got it right-set state
    } else {
      //console.log(scores);

      scores.push(this.state.Score.currentScore);

      topScoreCounter = Math.max(...scores);
      console.log(Math.max(scores));

      let newGame = this.state.cards.map(card => {
        let newCard = card;
        newCard.clicked = 0;
        return newCard;
      });

      //they got it wrong- deal with that
      //reset all clicked properties to 0 from dontMessWithState
      //handle score
      //console.log(scores);
      console.log(topScoreCounter);
      this.setState({
        cards: this.shuffleCards(newGame),
        Score: { currentScore: 0, topScore: topScoreCounter },
        Message: { message: "You lost" }
      });
      //console.log(this.state.cards);
    }

    //if/else
  };
  shuffleCards = array => {
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * array.length);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  // onClick={this.state.shuffleCards()
  render() {
    return (
      <Container>
        <Score
          currentScore={this.state.Score.currentScore}
          topScore={this.state.Score.topScore}
        ></Score>
        <Message message={this.state.Message.message}></Message>
        <div className="cards-container">
          {this.state.cards.map(card => (
            //call shuffleCards method in the onClick event

            <Card
              id={card.id}
              source={card.source}
              handleClick={this.handleClick}
              key={card.id}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default CardsContainer;
