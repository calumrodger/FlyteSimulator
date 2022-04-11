


import NewGame from '../components/NewGame';
import PlayerForm from '../components/PlayerForm';
import SoloLineOneInput from '../components/SoloLineOneInput';
import PlayerOneLineOneInput from '../components/PlayerOneLineOneInput';
import PlayerTwoLineOneInput from '../components/PlayerTwoLineOneInput';
import SoloLineTwoInput from '../components/SoloLineTwoInput';
import PlayerOneLineTwoInput from '../components/PlayerOneLineTwoInput';
import PlayerTwoLineTwoInput from '../components/PlayerTwoLineTwoInput';
import Request from '../helpers/request';


import React, { Fragment, useState, useEffect } from "react";
import StarterWordsList from "../components/StarterWordsList";
import SoloRhymeList from "../components/SoloRhymeList";
import PlayerOneRhymeList from "../components/PlayerOneRhymeList";
import PlayerTwoRhymeList from '../components/PlayerTwoRhymeList';
import CalculateScore from '../components/CalculateScore';
import perfect from "../img/Perfect.png";
import great from "../img/Great.png";
import okay from "../img/OK.png";
import Speech from 'react-speech';
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const GameContainer = () => {

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
      
    const [showNewGame, setShowNewGame] = useState(true)
    const [showNewPlayerForm, setShowNewPlayerForm] = useState(false)

    const [soloStarterWord, setSoloStarterWord] = useState({})
    const [soloRhymeWord, setSoloRhymeWord] = useState({})
    const [soloLineOne, setSoloLineOne] = useState("")
    const [soloLineTwo, setSoloLineTwo] = useState("")
    // const [soloFullLineString, setSoloFullLineString] = useState("")

    const [playerOneStarterWord, setPlayerOneStarterWord] = useState({})
    const [playerOneRhymeWord, setPlayerOneRhymeWord] = useState({})
    const [playerOneLineOne, setPlayerOneLineOne] = useState({})
    const [playerOneLineTwo, setPlayerOneLineTwo] = useState({})
    // const [playerOneFullLineAsString, setPlayerOneFullLineAsString] = useState("")

    const [playerTwoStarterWord, setPlayerTwoStarterWord] = useState({})
    const [playerTwoRhymeWord, setPlayerTwoRhymeWord] = useState({})
    const [playerTwoLineOne, setPlayerTwoLineOne] = useState({})
    const [playerTwoLineTwo, setPlayerTwoLineTwo] = useState({})
    // const [playerTwoFullLineAsString, setPlayerTwoFullLineAsString] = useState("")
    
    const [showSoloStarterWords, setShowSoloStarterWords] = useState(false)
    const [showSoloLineOneInput, setShowSoloLineOneInput] = useState(false)
    const [showSoloLineTwoInput, setShowSoloLineTwoInput] = useState(false)
    const [showSoloRhymes, setShowSoloRhymes] = useState(false)

    const [showPlayerOneStarterWords, setShowPlayerOneStarterWords] = useState(false)
    const [showPlayerOneLineOneInput, setShowPlayerOneLineOneInput] = useState(false)
    const [showPlayerOneLineTwoInput, setShowPlayerOneLineTwoInput] = useState(false)
    const [showPlayerOneRhymes, setShowPlayerOneRhymes] = useState(false)

    const [showPlayerTwoStarterWords, setShowPlayerTwoStarterWords] = useState(false)
    const [showPlayerTwoLineOneInput, setShowPlayerTwoLineOneInput] = useState(false)
    const [showPlayerTwoLineTwoInput, setShowPlayerTwoLineTwoInput] = useState(false)
    const [showPlayerTwoRhymes, setShowPlayerTwoRhymes] = useState(false)

    const [showSoloResult, setShowSoloResult] = useState(false)
    const [showTwoPlayerResult, setShowTwoPlayerResult] = useState(false)

    //global fetches and states
    useEffect(() => {
        fetchStarterWordsList()
        fetchPlayers()
      }, [])

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

      //create new player
      const handleCreateNewPlayerSubmit = (event) => {
        event.preventDefault()
        setShowNewGame(false)
        setShowNewPlayerForm(true)
      }

      //solo mechanics

  useEffect(() => {
    fetch("https://api.datamuse.com/words?rel_rhy=" + soloStarterWord.word)
      .then((response) => response.json())
      .then((data) => setSoloRhymeWordsList(data));
  }, [soloStarterWord]);


  const handlePlayerPost = (player) => {
    const request = new Request();
    const url = "http://localhost:8080/api/players"
    request.post(url, player)
    window.location.reload()
    console.log(players)
}


const soloStarterWordClicked = (e) => {
  let index = e.target.value;
  let selectedWord = starterWordsList[index];
  let newWord = {...soloStarterWord}
  newWord['word'] = selectedWord['word']
  newWord['wordClass'] = selectedWord['wordClass']
  setSoloStarterWord(newWord)
  setShowSoloStarterWords(false)
  setShowSoloLineOneInput(true)
}

const soloRhymeWordClicked = (e) => {
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

const handleSoloLineOneSubmit = (e) => {
  e.preventDefault()
  setSoloLineOne(e.target.value)
  let completeLine = (soloLineOne + " " + soloStarterWord.word)
  setSoloLineOne(completeLine)
  setShowSoloLineOneInput(false)
  setShowSoloRhymes(true)
}

const handleSoloLineTwoSubmit = (e) => {
  e.preventDefault()
  setSoloLineTwo(e.target.value)
  let completeLine = (soloLineTwo + " " + soloRhymeWord.word)
  setSoloLineTwo(completeLine)
  // let fullRap = (soloLineOne + " " + soloLineTwo)
  // setSoloFullLineAsString(fullRap)
  setShowSoloLineTwoInput(false)
  setShowSoloResult(true)
  console.log(soloLineTwo)
}

const interpretSoloScore = () => {
  if (soloRhymeWord.score > 0 && soloRhymeWord.score < 1000) {
    return <img className="perfect" src={perfect} alt="perfect" />
  } else if (soloRhymeWord.score >= 1000 && soloRhymeWord.score < 1500) {
    return <img className="great" src={great} alt="great" />;
  } else {
    return <img className="okay" src={okay} alt="okay" />;
  }
};

const soloTextToSpeech = () => {
    return `${soloLineOne} ${soloLineTwo}`;
}

const handleNewSoloRoundSubmit = (event) => {
  event.preventDefault()
  setShowSoloResult(false)
  setShowNewGame(true)
  setSoloLineOne("")
  setSoloLineTwo("")
}

const handleNewTwoPlayerRoundSubmit = (event) => {
  event.preventDefault()
  setShowTwoPlayerResult(false)
  setShowPlayerOneStarterWords(true)
  setPlayerOneLineOne("")
  setPlayerOneLineTwo("")
  setPlayerTwoLineOne("")
  setPlayerTwoLineTwo("")
}

// p1 mechanics

useEffect(() => {
  fetch("https://api.datamuse.com/words?rel_rhy=" + playerOneStarterWord.word)
    .then((response) => response.json())
    .then((data) => setPlayerOneRhymeWordsList(data));
}, [playerOneStarterWord]);


const playerOneStarterWordClicked = (e) => {
let index = e.target.value;
let selectedWord = starterWordsList[index];
let newWord = {...playerOneStarterWord}
newWord['word'] = selectedWord['word']
newWord['wordClass'] = selectedWord['wordClass']
setPlayerOneStarterWord(newWord)
setShowPlayerOneStarterWords(false)
setShowPlayerOneLineOneInput(true)
}

const playerOneRhymeWordClicked = (e) => {
const reducedWordsList = playerOneRhymeWordsList.slice(0, 10);
let index = e.target.value;
let selectedWord = playerOneRhymeWordsList[index];
let stateWord = { ...playerOneRhymeWord };
stateWord["score"] = selectedWord["score"];
stateWord["word"] = selectedWord["word"];
setPlayerOneRhymeWord(stateWord);
setPlayerOneRhymeWordsList(reducedWordsList);
setShowPlayerOneRhymes(false)
setShowPlayerOneLineTwoInput(true)
};

const handlePlayerOneLineOneSubmit = (e) => {
e.preventDefault()
setPlayerOneLineOne(e.target.value)
let completeLine = (playerOneLineOne + " " + playerOneStarterWord.word)
setPlayerOneLineOne(completeLine)
setShowPlayerOneLineOneInput(false)
setShowPlayerOneRhymes(true)
}

const handlePlayerOneLineTwoSubmit = (e) => {
e.preventDefault()
setPlayerOneLineTwo(e.target.value)
let completeLine = (playerOneLineTwo + " " + playerOneRhymeWord.word)
setPlayerOneLineTwo(completeLine)
setShowPlayerOneLineTwoInput(false)
setShowPlayerTwoStarterWords(true)
}

const interpretPlayerOneScore = () => {
if (playerOneRhymeWord.score > 0 && playerOneRhymeWord.score < 1000) {
  return <img className="perfect" src={perfect} alt="perfect" />
} else if (playerOneRhymeWord.score >= 1000 && playerOneRhymeWord.score < 1500) {
  return <img className="great" src={great} alt="great" />;
} else {
  return <img className="okay" src={okay} alt="okay" />;
}
};

const playerOneTextToSpeech = () => {
  return `${playerOneLineOne} ${playerOneLineTwo}`;
}

// p2 mechanics

useEffect(() => {
  fetch("https://api.datamuse.com/words?rel_rhy=" + playerTwoStarterWord.word)
    .then((response) => response.json())
    .then((data) => setPlayerTwoRhymeWordsList(data));
}, [playerTwoStarterWord]);


const playerTwoStarterWordClicked = (e) => {
let index = e.target.value;
let selectedWord = starterWordsList[index];
let newWord = {...playerTwoStarterWord}
newWord['word'] = selectedWord['word']
newWord['wordClass'] = selectedWord['wordClass']
setPlayerTwoStarterWord(newWord)
setShowPlayerTwoStarterWords(false)
setShowPlayerTwoLineOneInput(true)
}

const playerTwoRhymeWordClicked = (e) => {
const reducedWordsList = playerTwoRhymeWordsList.slice(0, 10);
let index = e.target.value;
let selectedWord = playerTwoRhymeWordsList[index];
let stateWord = { ...playerTwoRhymeWord };
stateWord["score"] = selectedWord["score"];
stateWord["word"] = selectedWord["word"];
setPlayerTwoRhymeWord(stateWord);
setPlayerTwoRhymeWordsList(reducedWordsList);
setShowPlayerTwoRhymes(false)
setShowPlayerTwoLineTwoInput(true)
};

const handlePlayerTwoLineOneSubmit = (e) => {
e.preventDefault()
setPlayerTwoLineOne(e.target.value)
let completeLine = (playerTwoLineOne + " " + playerTwoStarterWord.word)
setPlayerTwoLineOne(completeLine)
setShowPlayerTwoLineOneInput(false)
setShowPlayerTwoRhymes(true)
}

const handlePlayerTwoLineTwoSubmit = (e) => {
e.preventDefault()
setPlayerTwoLineTwo(e.target.value)
let completeLine = (playerTwoLineTwo + " " + playerTwoRhymeWord.word)
setPlayerTwoLineTwo(completeLine)
setShowPlayerTwoLineTwoInput(false)
setShowTwoPlayerResult(true)
}

const interpretPlayerTwoScore = () => {
if (playerTwoRhymeWord.score > 0 && playerTwoRhymeWord.score < 1000) {
  return <img className="perfect" src={perfect} alt="perfect" />
} else if (playerTwoRhymeWord.score >= 1000 && playerTwoRhymeWord.score < 1500) {
  return <img className="great" src={great} alt="great" />;
} else {
  return <img className="okay" src={okay} alt="okay" />;
}
};

const playerTwoTextToSpeech = () => {
  return `${playerTwoLineOne} ${playerTwoLineTwo}`;
}




    return(
        <>
        {showNewGame ? 
        <NewGame players={players} soloPlayer={soloPlayer} setSoloPlayer={setSoloPlayer} setShowNewGame={setShowNewGame} setShowStarterWords={setShowSoloStarterWords} handleCreateNewPlayerSubmit={handleCreateNewPlayerSubmit} setSoloPlayerSelected={setSoloPlayerSelected} setTwoPlayerSelected={setTwoPlayerSelected} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} setShowPlayerOneStarterWords={setShowPlayerOneStarterWords}/> 
        : null}
        
        {showNewPlayerForm ? 
        <PlayerForm onCreate={handlePlayerPost} /> 
        : null}
        
        {showSoloStarterWords ? 
        <>
        <h3>{soloPlayer.stageName}, select your starter word!</h3>
        <StarterWordsList starterWordsList={starterWordsList} starterWordClicked={soloStarterWordClicked} soloPlayer={soloPlayer.stageName}/> 
        </>
        : null}

        {showPlayerOneStarterWords ?
        <>
        <h3>{playerOne.stageName}, select your starter word!</h3>
        <StarterWordsList starterWordsList={starterWordsList} starterWordClicked={playerOneStarterWordClicked} playerOne={playerOne.stageName}/> 
        </>
        : null}

        {showPlayerTwoStarterWords ?
        <>
        <h3>{playerTwo.stageName}, select your starter word!</h3>
        <StarterWordsList starterWordsList={starterWordsList} starterWordClicked={playerTwoStarterWordClicked} playerTwo={playerTwo.stageName}/> 
        </>
        : null}

        {showSoloLineOneInput ? 
        <>
        <h3>{soloPlayer.stageName}, your first rhyme word is {soloStarterWord.word}!</h3>
        
        <h3>Now complete line one!</h3>
        <SoloLineOneInput soloLineOne={soloLineOne} setSoloLineOne={setSoloLineOne} handleSoloLineOneSubmit={handleSoloLineOneSubmit}/>
        <WordDisplay>
        <ul>{soloStarterWord.word}</ul>
        </WordDisplay>
        </>
        : null}

        {showPlayerOneLineOneInput ?
        <>
        <h3>{playerOne.stageName}, your first rhyme word is {playerOneStarterWord.word}!</h3>
        <h3>Now complete line one!</h3>
        <PlayerOneLineOneInput playerOneLineOne={playerOneLineOne} setPlayerOneLineOne={setPlayerOneLineOne} handlePlayerOneLineOneSubmit={handlePlayerOneLineOneSubmit}/>
        <WordDisplay>
        <ul>{playerOneStarterWord.word}</ul>
        </WordDisplay>
        </>
        : null}

        {showPlayerTwoLineOneInput ?
        <>
        <h3>{playerTwo.stageName}, your first rhyme word is {playerTwoStarterWord.word}!</h3>
        <h3>Now complete line one!</h3>
        <PlayerTwoLineOneInput playerTwoLineOne={playerTwoLineOne} setPlayerTwoLineOne={setPlayerTwoLineOne} handlePlayerTwoLineOneSubmit={handlePlayerTwoLineOneSubmit}/>
        <ul>{playerTwoStarterWord.word}</ul>
        </>
        : null}
        
        {showSoloRhymes ? 
        <>
        <h3>{soloPlayer.stageName}, your first line is {soloLineOne}</h3>
        <h3>Now select your rhyme word!</h3>
        <SoloRhymeList soloRhymeWordsList={soloRhymeWordsList} rhymeWordClicked={soloRhymeWordClicked}/> 
        </>
        : null}

        {showPlayerOneRhymes ? 
        <>
        <h3>{playerOne.stageName}, your first line is {playerOneLineOne}</h3>
        <h3>Now select your rhyme word!</h3>
        <PlayerOneRhymeList playerOneRhymeWordsList={playerOneRhymeWordsList} playerOneRhymeWordClicked={playerOneRhymeWordClicked}/> 
        </>
        : null}

        {showPlayerTwoRhymes ? 
        <>
        <h3>{playerTwo.stageName}, your first line is {playerTwoLineOne}</h3>
        <h3>Now select your rhyme word!</h3>
        <PlayerTwoRhymeList playerTwoRhymeWordsList={playerTwoRhymeWordsList} playerTwoRhymeWordClicked={playerTwoRhymeWordClicked}/> 
        </>
        : null} 
        
        {showSoloLineTwoInput ? 
        <>
        <h3>{soloPlayer.stageName}, your first line is {soloLineOne}</h3>
        <h3>Your second rhyme word is {soloRhymeWord.word}.</h3>
        <h3>Now complete line two!</h3>
        <SoloLineTwoInput soloLineTwo={soloLineTwo} setSoloLineTwo={setSoloLineTwo} handleSoloLineTwoSubmit={handleSoloLineTwoSubmit}/>
        <ul>{soloRhymeWord.word}</ul>
        </>
        : null}

        {showPlayerOneLineTwoInput ? 
        <>
        <h3>{playerOne.stageName}, your first line is {playerOneLineOne}</h3>
        <h3>Your second rhyme word is {playerOneRhymeWord.word}.</h3>
        <h3>Now complete line two!</h3>
        <PlayerOneLineTwoInput playerOneLineTwo={playerOneLineTwo} setPlayerOneLineTwo={setPlayerOneLineTwo} handlePlayerOneLineTwoSubmit={handlePlayerOneLineTwoSubmit}/>
        <ul>{playerOneRhymeWord.word}</ul>
        </>
        : null} 

        {showPlayerTwoLineTwoInput ? 
        <>
        <h3>{playerTwo.stageName}, your first line is {playerTwoLineOne}</h3>
        <h3>Your second rhyme word is {playerTwoRhymeWord.word}.</h3>
        <h3>Now complete line two!</h3>
        <PlayerTwoLineTwoInput playerTwoLineTwo={playerTwoLineTwo} setPlayerTwoLineTwo={setPlayerTwoLineTwo} handlePlayerTwoLineTwoSubmit={handlePlayerTwoLineTwoSubmit}/>
        <ul>{playerTwoRhymeWord.word}</ul>
        </>
        : null} 
        
        {showSoloResult ? 
        <>
        <p>{soloPlayer.stageName}, your couplet is:</p>
        <p>{soloLineOne}</p>
        <p>{soloLineTwo}</p>
        <br/>
        <p>Your score is {soloRhymeWord.score}!</p> 
        <button onClick={handleNewSoloRoundSubmit}>Play another round?</button>
        <button>Save round to database?</button>
        <Speech
textAsButton={true}    
displayText="Rap!" 
text={soloTextToSpeech()}/>
          <div className="stage2">
          <div class="box bounce-7">{interpretSoloScore()} </div>         
            </div>
        <CalculateScore soloLineOne={soloLineOne} soloLineTwo={soloLineTwo}/>
        </>
        : null}
        
        {showTwoPlayerResult ? 
        <>
        <StylePoints>
          <div className="p1style">
        <p>{playerOne.stageName}, your couplet is:</p>
        <p>{playerOneLineOne}</p>
        <p>{playerOneLineTwo}</p>
        <p>Your score is {playerOneRhymeWord.score}!</p> 
        <Speech
textAsButton={true}    
displayText="Rap!" 
text={playerOneTextToSpeech()}/>
          <div className="stage2">
          <div class="box bounce-7">{interpretPlayerOneScore()} </div>    
          </div>     
            </div>

        <div className="p2style">
        <p>{playerTwo.stageName}, your couplet is:</p>
        <p>{playerTwoLineOne}</p>
        <p>{playerTwoLineTwo}</p>
        <p>Your score is {playerTwoRhymeWord.score}!</p> 
        <Speech
textAsButton={true}    
displayText="Rap!" 
text={playerTwoTextToSpeech()}/>
          <div className="stage2">
          <div class="box bounce-7">{interpretPlayerTwoScore()} </div>         
            
        <br/>
        </div>
        </div>
        </StylePoints>
        <br></br>
        <StyleResults>
        {playerOneRhymeWord.score > playerTwoRhymeWord.score ?
        
        <p className="winner">The winner is... {playerOne.stageName}! </p> :
        <p className="winner">The winner is... {playerTwo.stageName}! </p>}
        </StyleResults>
        <button onClick={handleNewTwoPlayerRoundSubmit}>Play another round?</button>
        <button>Save round to database?</button>
        </>
        : null}
        </>
    )
};

export default GameContainer;

const StylePoints = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .p1style {
    font-weight: bold;
    flex: 1;
    flex-direction: row;
    width: 250px;
    height: 200px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    left: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .p2style {
    font-weight: bold;
    flex: 1;
    flex-direction: row;
    width: 250px;
    height: 200px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    right: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }`

const StyleResults = styled.div`
margin: auto; 
width: 50%;
padding: 10px;
color: white;
text-shadow: 2px 2px hotpink;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, inset 0px 13px 0px 0px rgba(0,124,255,0);`

const WordDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  border-radius: 10px;
  font-style: italic;`