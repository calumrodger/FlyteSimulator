


import NewGame from '../components/NewGame';
import PlayerForm from '../components/PlayerForm';
import LineOneInput from '../components/LineOneInput';
import LineTwoInput from '../components/LineTwoInput';
import Request from '../helpers/request';
import { dictionary } from 'cmu-pronouncing-dictionary'

import React, { Fragment, useState, useEffect } from "react";
import StarterWordsList from "../components/StarterWordsList";
import RhymeList from "../components/RhymeList";
import perfect from "../img/Perfect.png";
import great from "../img/Great.png";
import okay from "../img/OK.png";
import Speech from 'react-speech';
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const GameContainer = () => {
    // const test = ["hello", "world"]
    // const [testing, setTesting] = useState([])


    const [players, setPlayers] = useState([])
    const [starterWordsList, setStarterWordsList] = useState([])
    const [rhymeWordsList, setRhymeWordsList] = useState([])

    const [currentPlayer, setCurrentPlayer] = useState({})
    const [starterWord, setStarterWord] = useState({})
    const [rhymeWord, setRhymeWord] = useState({})

    const [lineOne, setLineOne] = useState("")
    const [lineTwo, setLineTwo] = useState("")
    
    const [showNewGame, setShowNewGame] = useState(true)
    const [showStarterWords, setShowStarterWords] = useState(true)
    const [showLineOneInput, setShowOneLineInput] = useState(false)
    const [showRhymes, setShowRhymes] = useState(false)
    const [showResult, setShowResult] = useState(false)

    useEffect(() => {
        fetchStarterWordsList()
        fetchPlayers()
        console.log(dictionary["hello"])
        setLineOne("test")
      }, [])

  useEffect(() => {
    fetch("https://api.datamuse.com/words?rel_rhy=" + starterWord.word)
      .then((response) => response.json())
      .then((data) => setRhymeWordsList(data));
  }, [starterWord]);


    const fetchPlayers = () => {
        fetch("http://localhost:8080/api/players/")
        .then(response => response.json())
        .then(data => setPlayers(data))
        .then(console.log(players))
      }

    const fetchStarterWordsList = () => {
        fetch("http://localhost:8080/api/starter_words/")
        .then(response => response.json())
        .then(data => setStarterWordsList(data))
        .then(console.log(starterWordsList))
      }

    const starterWordClicked = (e) => {
        let index = e.target.value;
        let selectedWord = starterWordsList[index];
        let newWord = {...starterWord}
        newWord['word'] = selectedWord['word']
        newWord['wordClass'] = selectedWord['wordClass']
        setStarterWord(newWord)
        setShowResult(false)
        setShowRhymes(true)
    }

  const rhymeWordClicked = (e) => {
    // const filteredWordsList = rhymeWordsList.filter(word => word.numSyllables === 1);
    const reducedWordsList = rhymeWordsList.slice(0, 10);
    let index = e.target.value;
    let selectedWord = rhymeWordsList[index];
    let stateWord = { ...rhymeWord };
    stateWord["score"] = selectedWord["score"];
    stateWord["word"] = selectedWord["word"];
    console.log(stateWord);
    console.log(starterWord);
    setRhymeWord(stateWord);
    setRhymeWordsList(reducedWordsList);
    setShowResult(true);
  };


  const interpretScore = () => {
    if (rhymeWord.score > 0 && rhymeWord.score < 1000) {
      return <img className="perfect" src={perfect} alt="perfect" />
    } else if (rhymeWord.score >= 1000 && rhymeWord.score < 1500) {
      return <img className="great" src={great} alt="great" />;
    } else {
      return <img className="okay" src={okay} alt="okay" />;
    }
  };

  const textToSpeech = () => {
      return "Mess with me then i think you better " + starterWord.word + " get out of here before I fetch my " + rhymeWord.word + ".";
  }

  const handlePlayerPost = (player) => {
    const request = new Request();
    const url = "http://localhost:8080/api/players"
    request.post(url, player)
    window.location.reload()
    console.log(players)
}

const handleLineOneSubmit = (e) => {
  e.preventDefault()
  setLineOne(e.target.value)
  let completeLine = (lineOne + " " + starterWord.word)
  setLineOne(completeLine)
  console.log(lineOne)
}

const handleLineTwoSubmit = (e) => {
  e.preventDefault()
  setLineTwo(e.target.value)
  let completeLine = (lineTwo + " " + rhymeWord.word)
  setLineTwo(completeLine)
  console.log(lineTwo)
}

const handleSelectPlayerSubmit = (event) => {
  event.preventDefault()
  const index = parseInt(event.target.value);
  const selectedPlayer = players[index]
  setCurrentPlayer(selectedPlayer)
  console.log(currentPlayer)
}


    return(
        <>
        {showStarterWords ? <StarterWordsList starterWordsList={starterWordsList} starterWordClicked={starterWordClicked}/> : null}
        {showRhymes ? <RhymeList rhymeWordsList={rhymeWordsList} rhymeWordClicked={rhymeWordClicked} showResult={showResult}/> : null}
        {showResult ? <p>Your words are {starterWord.word} and {rhymeWord.word}! Your score is {rhymeWord.score}!</p> : null}
        {showNewGame ? <NewGame players={players} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} handleSelectPlayerSubmit={handleSelectPlayerSubmit}/> : null}
        <PlayerForm onCreate={handlePlayerPost} />
        <LineOneInput lineOne={lineOne} setLineOne={setLineOne} handleLineOneSubmit={handleLineOneSubmit}/>{starterWord.word}
        <LineTwoInput lineTwo={lineTwo} setLineTwo={setLineTwo} handleLineTwoSubmit={handleLineTwoSubmit}/>{rhymeWord.word}
        <Speech
textAsButton={true}    
displayText="Rap!" 
text={textToSpeech()}/>
          <div className="stage2">
          <div class="box bounce-7">{interpretScore()} </div>
  

          
            </div>
        </>
    )
};


export default GameContainer;

