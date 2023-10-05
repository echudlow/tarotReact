import React, { useState, useEffect} from "react";
import './App.css';
import gerald from './assets/gerald.gif';
import { fetchAllCards } from "./services/CardService";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gerald} className="shuffling" alt="shuffle" />
          <Description></Description>
          <ReadingType></ReadingType>
      </header>
    </div>
  );
}
function Description(){
  return (
      <>
      <h1>Welcome to my Tarot Card Reader!</h1>
        <p>
          A little app that I designed to so that I could learn React and
          do my tarot card readings digitally.
        </p>
      </>
  )
}
function ReadingType(){
    return (
        <>
            <div>
                <SingleReadButton></SingleReadButton>
                <ThreeReadButton></ThreeReadButton>
                <ViewAllCardsButton></ViewAllCardsButton>
            </div>
        </>
    )
}
function SingleReadButton() {
    function handleClick(){

    }

    return (
        <button onClick={handleClick}>
            Single Card Reading
        </button>
    );
}

function ThreeReadButton() {
    return (
        <button>Three Card Reading</button>
    );
}

function ViewAllCardsButton() {
    const [cards, setCards] = useState([]);
    function handleClick() {

    }
    return (
        <button onClick={ handleClick }>
            View All Cards
        </button>
    );
}
export default App;

