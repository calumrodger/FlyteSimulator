


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

    const [soloPlayerSelected, setSoloPlayerSelected] = useState(false)
    const [twoPlayerSelected, setTwoPlayerSelected] = useState(false)

    const [soloRhymeWordsList, setSoloRhymeWordsList] = useState([])
    const [playerOneRhymeWordsList, setPlayerOneRhymeWordsList] = useState([])
    const [playerTwoRhymeWordsList, setPlayerTwoRhymeWordsList] = useState([])



    const [soloPlayer, setSoloPlayer] = useState({})
    const [playerOne, setPlayerOne] = useState({})
    const [playerTwo, setPlayerTwo] = useState({})

    const [soloStarterWord, setSoloStarterWord] = useState({})
    const [soloRhymeWord, setSoloRhymeWord] = useState({})
    const [playerOneStarterWord, setPlayerOneStarterWord] = useState({})
    const [playerTwoStarterWord, setPlayerTwoStarterWord] = useState({})
    const [playerOneRhymeWord, setPlayerOneRhymeWord] = useState({})
    const [playerTwoRhymeWord, setPlayerTwoRhymeWord] = useState({})

    const [soloLineOne, setSoloLineOne] = useState("")
    const [soloLineTwo, setSoloLineTwo] = useState("")
  
    const [showNewGame, setShowNewGame] = useState(true)
    const [showNewPlayerForm, setShowNewPlayerForm] = useState(false)

    const [showSoloStarterWords, setShowSoloStarterWords] = useState(false)
    const [showSoloLineOneInput, setShowSoloLineOneInput] = useState(false)
    const [showSoloLineTwoInput, setShowSoloLineTwoInput] = useState(false)
    const [showSoloRhymes, setShowSoloRhymes] = useState(false)

    const [showResult, setShowResult] = useState(false)

    useEffect(() => {
        fetchStarterWordsList()
        fetchPlayers()
      }, [])

  useEffect(() => {
    fetch("https://api.datamuse.com/words?rel_rhy=" + soloStarterWord.word)
      .then((response) => response.json())
      .then((data) => setSoloRhymeWordsList(data));
  }, [soloStarterWord]);


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
        let newWord = {...soloStarterWord}
        newWord['word'] = selectedWord['word']
        newWord['wordClass'] = selectedWord['wordClass']
        setSoloStarterWord(newWord)
        setShowSoloStarterWords(false)
        setShowSoloLineOneInput(true)
    }

  const rhymeWordClicked = (e) => {
    // const filteredWordsList = rhymeWordsList.filter(word => word.numSyllables === 1);
    const reducedWordsList = soloRhymeWordsList.slice(0, 10);
    let index = e.target.value;
    let selectedWord = soloRhymeWordsList[index];
    let stateWord = { ...soloRhymeWord };
    stateWord["score"] = selectedWord["score"];
    stateWord["word"] = selectedWord["word"];
    setSoloRhymeWord(stateWord);
    setSoloRhymeWordsList(reducedWordsList);
    setShowSoloRhymes(false)
    setShowSoloLineTwoInput(true)
  };


  const interpretScore = () => {
    if (soloRhymeWord.score > 0 && soloRhymeWord.score < 1000) {
      return <img className="perfect" src={perfect} alt="perfect" />
    } else if (soloRhymeWord.score >= 1000 && soloRhymeWord.score < 1500) {
      return <img className="great" src={great} alt="great" />;
    } else {
      return <img className="okay" src={okay} alt="okay" />;
    }
  };

  const textToSpeech = () => {
      return `${soloLineOne} ${soloLineTwo}`;
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
  setSoloLineOne(e.target.value)
  let completeLine = (soloLineOne + " " + soloStarterWord.word)
  setSoloLineOne(completeLine)
  setShowSoloLineOneInput(false)
  setShowSoloRhymes(true)
}

const handleLineTwoSubmit = (e) => {
  e.preventDefault()
  setSoloLineTwo(e.target.value)
  let completeLine = (soloLineTwo + " " + soloRhymeWord.word)
  setSoloLineTwo(completeLine)
  setShowSoloLineTwoInput(false)
  setShowResult(true)
  console.log(soloLineTwo)
}


const handleCreateNewPlayerSubmit = (event) => {
  event.preventDefault()
  setShowNewGame(false)
  setShowNewPlayerForm(true)
}

const handleNewRoundSubmit = (event) => {
  event.preventDefault()
  setShowResult(false)
  setShowNewGame(true)
}


    return(
        <>
        {showNewGame ? 
        <NewGame players={players} soloPlayer={soloPlayer} setSoloPlayer={setSoloPlayer} setShowNewGame={setShowNewGame} setShowStarterWords={setShowSoloStarterWords} handleCreateNewPlayerSubmit={handleCreateNewPlayerSubmit} setSoloPlayerSelected={setSoloPlayerSelected} setTwoPlayerSelected={setTwoPlayerSelected} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo}/> 
        : null}
        
        {showNewPlayerForm ? 
        <PlayerForm onCreate={handlePlayerPost} /> 
        : null}
        
        {showSoloStarterWords ? 
        <>
        <h3>{soloPlayer.stageName}, select your starter word!</h3>
        <StarterWordsList starterWordsList={starterWordsList} starterWordClicked={starterWordClicked} soloPlayer={soloPlayer.stageName}/> 
        </>
        : null}
        
        {showSoloLineOneInput ? 
        <>
        <h3>{soloPlayer.stageName}, your first rhyme word is {soloStarterWord.word}!</h3>
        <h3>Now complete line one!</h3>
        <LineOneInput lineOne={soloLineOne} setLineOne={setSoloLineOne} handleLineOneSubmit={handleLineOneSubmit}/>
        <ul>{soloStarterWord.word}</ul>
        </>
        : null}
        
        {showSoloRhymes ? 
        <>
        <h3>{soloPlayer.stageName}, your first line is {soloLineOne}</h3>
        <h3>Now select your rhyme word!</h3>
        <RhymeList soloRhymeWordsList={soloRhymeWordsList} rhymeWordClicked={rhymeWordClicked} showResult={showResult}/> 
        </>
        : null}
        
        {showSoloLineTwoInput? 
        <>
        <h3>{soloPlayer.stageName}, your first line is {soloLineOne}</h3>
        <h3>Your second rhyme word is {soloRhymeWord.word}.</h3>
        <h3>Now complete line two!</h3>
        <LineTwoInput lineTwo={soloLineTwo} setLineTwo={setSoloLineTwo} handleLineTwoSubmit={handleLineTwoSubmit}/>
        <ul>{soloRhymeWord.word}</ul>
        </>
        : null}
        
        {showResult ? 
        <>
        <p>{soloPlayer.stageName}, your couplet is:</p>
        <p>{soloLineOne}</p>
        <p>{soloLineTwo}</p>
        <br/>
        <p>Your score is {soloRhymeWord.score}!</p> 
        <button onClick={handleNewRoundSubmit}>Play another round?</button>
        <button>Save round to database?</button>
        <Speech
textAsButton={true}    
displayText="Rap!" 
text={textToSpeech()}/>
          <div className="stage2">
          <div class="box bounce-7">{interpretScore()} </div>         
            </div>
        </>
        : null}
        
        
       
        
        
        </>
    )
};


export default GameContainer;

