import NewGame from '../components/NewGame';
import PlayerForm from '../components/PlayerForm';
import SoloLineOneInput from '../components/SoloLineOneInput';
import PlayerOneLineOneInput from '../components/PlayerOneLineOneInput';
import PlayerTwoLineOneInput from '../components/PlayerTwoLineOneInput';
import SoloLineTwoInput from '../components/SoloLineTwoInput';
import PlayerOneLineTwoInput from '../components/PlayerOneLineTwoInput';
import PlayerTwoLineTwoInput from '../components/PlayerTwoLineTwoInput';
import Request from '../helpers/request';
import SoloPlayerUpdate from '../components/SoloPlayerUpdate';
import TwoPlayerUpdate from '../components/TwoPlayerUpdate';
import HallOfFame from '../components/HallOfFame';


import React, { Fragment, useState, useEffect } from "react";
import StarterWordsList from "../components/StarterWordsList";
import SoloRhymeList from "../components/SoloRhymeList";
import PlayerOneRhymeList from "../components/PlayerOneRhymeList";
import PlayerTwoRhymeList from '../components/PlayerTwoRhymeList';
import SoloCalculateScore from '../components/SoloCalculateScore';
import PlayerOneCalculateScore from '../components/PlayerOneCalculateScore';
import PlayerTwoCalculateScore from '../components/PlayerTwoCalculateScore';
import perfect from "../img/Perfect.png";
import great from "../img/Great.png";
import okay from "../img/OK.png";
import Speech from 'react-speech';
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import NavBar from '../NavBar';
import Footer from '../Footer';
import ringsound from '../sounds/ringpickup.mp3'


const GameContainer = () => {

    const [players, setPlayers] = useState([])
    const [starterWordsList, setStarterWordsList] = useState([])
    const [previousRaps, setPreviousRaps] = useState([])
    const [soloRhymeWordsList, setSoloRhymeWordsList] = useState([])
    const [playerOneRhymeWordsList, setPlayerOneRhymeWordsList] = useState([])
    const [playerTwoRhymeWordsList, setPlayerTwoRhymeWordsList] = useState([])

    const [soloPlayer, setSoloPlayer] = useState({})
    const [playerOne, setPlayerOne] = useState({})
    const [playerTwo, setPlayerTwo] = useState({}) 
    const [showNewGame, setShowNewGame] = useState(true)
    const [showNewPlayerForm, setShowNewPlayerForm] = useState(false)
    const [showHallOfFame, setShowHallOfFame] = useState(false)

    const [soloStarterWord, setSoloStarterWord] = useState({})
    const [soloRhymeWord, setSoloRhymeWord] = useState({})
    const [soloRhymeWordValue, setSoloRhymeWordValue] = useState(0)
    const [soloLineOne, setSoloLineOne] = useState("")
    const [soloLineTwo, setSoloLineTwo] = useState("")
    const [soloAlliterationBonus, setSoloAlliterationBonus] = useState(0)
    const [soloAssonanceBonus, setSoloAssonanceBonus] = useState(0)
    const [soloFinalScore, setSoloFinalScore] = useState(0)

    const [playerOneStarterWord, setPlayerOneStarterWord] = useState({})
    const [playerOneRhymeWord, setPlayerOneRhymeWord] = useState({})
    const [playerOneRhymeWordValue, setPlayerOneRhymeWordValue] = useState(0)
    const [playerOneLineOne, setPlayerOneLineOne] = useState("")
    const [playerOneLineTwo, setPlayerOneLineTwo] = useState("")
    const [playerOneAlliterationBonus, setPlayerOneAlliterationBonus] = useState(0)
    const [playerOneAssonanceBonus, setPlayerOneAssonanceBonus] = useState(0)
    const [playerOneFinalScore, setPlayerOneFinalScore] = useState(0)

    const [playerTwoStarterWord, setPlayerTwoStarterWord] = useState({})
    const [playerTwoRhymeWord, setPlayerTwoRhymeWord] = useState({})
    const [playerTwoRhymeWordValue, setPlayerTwoRhymeWordValue] = useState(0)
    const [playerTwoLineOne, setPlayerTwoLineOne] = useState("")
    const [playerTwoLineTwo, setPlayerTwoLineTwo] = useState("")
    const [playerTwoAlliterationBonus, setPlayerTwoAlliterationBonus] = useState(0)
    const [playerTwoAssonanceBonus, setPlayerTwoAssonanceBonus] = useState(0)
    const [playerTwoFinalScore, setPlayerTwoFinalScore] = useState(0)
    
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
        fetchPreviousRaps()
      }, [])

      const fetchPlayers = () => {
        fetch("http://localhost:8080/api/players/")
        .then(response => response.json())
        .then(data => setPlayers(data))
      }

      const fetchStarterWordsList = () => {
        fetch("http://localhost:8080/api/starter_words/")
        .then(response => response.json())
        .then(data => setStarterWordsList(data))
      }
    
      const fetchPreviousRaps = () => {
        fetch("http://localhost:8080/api/previous_raps/")
        .then(response => response.json())
        .then(data => setPreviousRaps(data))
      }

      //create new player
      const handleCreateNewPlayerSubmit = (event) => {
        event.preventDefault()
        setShowNewGame(false)
        setShowNewPlayerForm(true)
      }

      const handlePlayerPost = (player) => {
        const request = new Request();
        const url = "http://localhost:8080/api/players"
        request.post(url, player)
        window.location.reload()
    }

      const ringpickupsound = new Audio(
        ringsound
      )

    const handleRapPost = (rap) => {
      const request = new Request();
      const url = "http://localhost:8080/api/previous_raps"
      request.post(url, rap)
    }

    const handleDatabaseUpdate = (player) => {
      const request = new Request();
      const url = "http://localhost:8080/api/players/"
      request.patch(url + player.id, player)
      .then(() => window.location.reload())
    }

    const handleHallOfFameClick = (e) => {
    e.preventDefault()
    setShowHallOfFame(true)
    setShowNewGame(false)
    ringpickupsound.play()
    }

      //solo mechanics

  useEffect(() => {
    fetch("https://api.datamuse.com/words?rel_rhy=" + soloStarterWord.word)
      .then((response) => response.json())
      .then((data) => setSoloRhymeWordsList(data));
  }, [soloStarterWord]);


const soloStarterWordClicked = (e) => {
  let index = e.target.value;
  let selectedWord = starterWordsList[index];
  let newWord = {...soloStarterWord}
  newWord['word'] = selectedWord['word']
  newWord['value'] = selectedWord['value']
  setSoloStarterWord(newWord)
  setShowSoloStarterWords(false)
  setShowSoloLineOneInput(true)
}

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
  setShowSoloLineTwoInput(false)
  setShowSoloResult(true)
  let finalScore = (soloAlliterationBonus + soloAssonanceBonus)
  setSoloFinalScore(finalScore)
}

const interpretSoloScore = () => {
  if (soloFinalScore >= 15) {
    return <img className="perfect" src={perfect} alt="perfect" />
  } else if (soloFinalScore >= 5 && soloFinalScore < 15) {
    return <img className="great" src={great} alt="great" />;
  } else {
    return <img className="okay" src={okay} alt="okay" />;
  }
};

const soloTextToSpeech = () => {
    return `${soloLineOne}, ${soloLineTwo}`;
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
newWord['value'] = selectedWord['value']
setPlayerOneStarterWord(newWord)
setShowPlayerOneStarterWords(false)
setShowPlayerOneLineOneInput(true)
}

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
if (playerOneFinalScore >= 15) {
  return <img className="perfect" src={perfect} alt="perfect" />
} else if (playerOneFinalScore >= 5 && playerOneFinalScore < 15) {
  return <img className="great" src={great} alt="great" />;
} else {
  return <img className="okay" src={okay} alt="okay" />;
}
};

const playerOneTextToSpeech = () => {
  return `${playerOneLineOne}, ${playerOneLineTwo}`;
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
newWord['value'] = selectedWord['value']
setPlayerTwoStarterWord(newWord)
setShowPlayerTwoStarterWords(false)
setShowPlayerTwoLineOneInput(true)
}

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
if (playerTwoFinalScore >= 15 ) {
  return <img className="perfect" src={perfect} alt="perfect" />
} else if (playerTwoFinalScore >= 5 && playerTwoFinalScore < 15) {
  return <img className="great" src={great} alt="great" />;
} else {
  return <img className="okay" src={okay} alt="okay" />;
}
};

const playerTwoTextToSpeech = () => {
  return `${playerTwoLineOne}, ${playerTwoLineTwo}`;
}




    return(
        <>
                
        {showNewGame ? 

        <>
        <NewGame players={players} soloPlayer={soloPlayer} setSoloPlayer={setSoloPlayer} setShowNewGame={setShowNewGame} setShowStarterWords={setShowSoloStarterWords} handleCreateNewPlayerSubmit={handleCreateNewPlayerSubmit} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} setShowPlayerOneStarterWords={setShowPlayerOneStarterWords} handleHallOfFameClick={handleHallOfFameClick}/> 
        </>

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
        <SoloLineOneInput soloStarterWord={soloStarterWord} soloLineOne={soloLineOne} setSoloLineOne={setSoloLineOne} handleSoloLineOneSubmit={handleSoloLineOneSubmit}/>
        <WordDisplay>
        <ul>{soloStarterWord.word}</ul>
        </WordDisplay>
        </>
        : null}

        {showPlayerOneLineOneInput ?
        <>
        <h3>{playerOne.stageName}, your first rhyme word is {playerOneStarterWord.word}!</h3>
        <h3>Now complete line one!</h3>
        <PlayerOneLineOneInput playerOneStarterWord={playerOneStarterWord} playerOneLineOne={playerOneLineOne} setPlayerOneLineOne={setPlayerOneLineOne} handlePlayerOneLineOneSubmit={handlePlayerOneLineOneSubmit}/>
        <WordDisplay>
        <ul>{playerOneStarterWord.word}</ul>
        </WordDisplay>
        </>
        : null}

        {showPlayerTwoLineOneInput ?
        <>
        <h3>{playerTwo.stageName}, your first rhyme word is "{playerTwoStarterWord.word}"!</h3>
        <h3>Now complete line one!</h3>
        <PlayerTwoLineOneInput playerTwoStarterWord={playerTwoStarterWord} playerTwoLineOne={playerTwoLineOne} setPlayerTwoLineOne={setPlayerTwoLineOne} handlePlayerTwoLineOneSubmit={handlePlayerTwoLineOneSubmit}/>
        <ul>{playerTwoStarterWord.word}</ul>
        </>
        : null}
        
        {showSoloRhymes ? 
        <>
        <h3>{soloPlayer.stageName}, your first line is "{soloLineOne}"</h3>
        <h3>Now select your rhyme word!</h3>
        <SoloRhymeList soloRhymeWordsList={soloRhymeWordsList} setSoloRhymeWord={setSoloRhymeWord} setSoloRhymeWordsList={setSoloRhymeWordsList} setShowSoloRhymes={setShowSoloRhymes} setSoloRhymeWordValue={setSoloRhymeWordValue} setShowSoloLineTwoInput={setShowSoloLineTwoInput}/> 
        </>
        : null}

        {showPlayerOneRhymes ? 
        <>
        <h3>{playerOne.stageName}, your first line is "{playerOneLineOne}"</h3>
        <h3>Now select your rhyme word!</h3>
        <PlayerOneRhymeList playerOneRhymeWordsList={playerOneRhymeWordsList} playerOneRhymeWord={setPlayerOneRhymeWord} setPlayerOneRhymeWord={setPlayerOneRhymeWord} setPlayerOneRhymeWordsList={setPlayerOneRhymeWordsList} setShowPlayerOneRhymes={setShowPlayerOneRhymes} setPlayerOneRhymeWordValue={setPlayerOneRhymeWordValue} setShowPlayerOneLineTwoInput={setShowPlayerOneLineTwoInput}/> 
        </>
        : null}

        {showPlayerTwoRhymes ? 
        <>
        <h3>{playerTwo.stageName}, your first line is "{playerTwoLineOne}"</h3>
        <h3>Now select your rhyme word!</h3>
        <PlayerTwoRhymeList playerTwoRhymeWordsList={playerTwoRhymeWordsList} playerTwoRhymeWord={setPlayerTwoRhymeWord} setPlayerTwoRhymeWord={setPlayerTwoRhymeWord} setPlayerTwoRhymeWordsList={setPlayerTwoRhymeWordsList} setShowPlayerTwoRhymes={setShowPlayerTwoRhymes} setPlayerTwoRhymeWordValue={setPlayerTwoRhymeWordValue} setShowPlayerTwoLineTwoInput={setShowPlayerTwoLineTwoInput}/> 
        </>
        : null} 
        
        {showSoloLineTwoInput ? 
        <>
        <h3>{soloPlayer.stageName}, your first line is "{soloLineOne}"</h3>
        <h3>Your second rhyme word is {soloRhymeWord.word}.</h3>
        <h3>Now complete line two!</h3>
        <SoloLineTwoInput soloRhymeWord={soloRhymeWord} soloLineTwo={soloLineTwo} setSoloLineTwo={setSoloLineTwo} handleSoloLineTwoSubmit={handleSoloLineTwoSubmit}/>
        <ul>{soloRhymeWord.word}</ul>
        </>
        : null}

        {showPlayerOneLineTwoInput ? 
        <>
        <h3>{playerOne.stageName}, your first line is "{playerOneLineOne}"</h3>
        <h3>Your second rhyme word is {playerOneRhymeWord.word}.</h3>
        <h3>Now complete line two!</h3>
        <PlayerOneLineTwoInput playerOneRhymeWord={playerOneRhymeWord} playerOneLineTwo={playerOneLineTwo} setPlayerOneLineTwo={setPlayerOneLineTwo} handlePlayerOneLineTwoSubmit={handlePlayerOneLineTwoSubmit}/>
        <ul>{playerOneRhymeWord.word}</ul>
        </>
        : null} 

        {showPlayerTwoLineTwoInput ? 
        <>
        <h3>{playerTwo.stageName}, your first line is "{playerTwoLineOne}"</h3>
        <h3>Your second rhyme word is {playerTwoRhymeWord.word}.</h3>
        <h3>Now complete line two!</h3>
        <PlayerTwoLineTwoInput playerTwoRhymeWord={playerTwoRhymeWord} playerTwoLineTwo={playerTwoLineTwo} setPlayerTwoLineTwo={setPlayerTwoLineTwo} handlePlayerTwoLineTwoSubmit={handlePlayerTwoLineTwoSubmit}/>
        <ul>{playerTwoRhymeWord.word}</ul>
        </>
        : null} 
        
        {showSoloResult ? 
        <>
        <SoloStyling>
        <p>{soloPlayer.stageName}, your couplet is:</p>
        <p>{soloLineOne}</p>
        <p>{soloLineTwo}</p>
        <br/>
        <p>STARTER WORD SCORE: {soloStarterWord.value}</p>
        <p>RHYME WORD SCORE: {soloRhymeWordValue}</p>
        {soloAlliterationBonus !== 0 ?
        <p>ALLITERATION BONUS: {soloAlliterationBonus}</p>
        : null}
        {soloAssonanceBonus !== 0 ?
        <p>ASSONANCE BONUS: {soloAssonanceBonus}</p>
        : null}
        <p>FINAL SCORE: {soloFinalScore}!</p> 
        </SoloStyling>
        <button onClick={handleNewSoloRoundSubmit}>Play another round?</button>
        <SoloPlayerUpdate handleRapPost={handleRapPost} score={soloFinalScore} soloPlayer={soloPlayer} setSoloPlayer={setSoloPlayer} soloLineOne={soloLineOne} soloLineTwo={soloLineTwo} onUpdate={handleDatabaseUpdate}/>
        <Speech
textAsButton={true}    
displayText="Rap!" 
text={soloTextToSpeech()}/>
          <div className="stage2">
          <div class="box bounce-7">{interpretSoloScore()} </div>         
            </div>   
            <SoloCalculateScore soloLineOne={soloLineOne} soloLineTwo={soloLineTwo} setSoloAlliterationBonus={setSoloAlliterationBonus} setSoloAssonanceBonus={setSoloAssonanceBonus} setSoloFinalScore={setSoloFinalScore} soloStarterWord={soloStarterWord} soloRhymeWordValue={soloRhymeWordValue}/>
        </>
        : null}
        
        {showTwoPlayerResult ? 
        <>
        <StylePoints>
          <div className="p1style">
        <p>{playerOne.stageName}, your couplet is:</p>
        <p>{playerOneLineOne}</p>
        <p>{playerOneLineTwo}</p>
        <br/>
        <p>STARTER WORD SCORE: {playerOneStarterWord.value}</p>
        <p>RHYME WORD SCORE: {playerOneRhymeWordValue}</p>
        {playerOneAlliterationBonus !== 0 ?
        <p>ALLITERATION BONUS: {playerOneAlliterationBonus}</p>
        : null}
        {playerOneAssonanceBonus !== 0 ?
        <p>ASSONANCE BONUS: {playerOneAssonanceBonus}</p>
        : null}
        <p>FINAL SCORE: {playerOneFinalScore}!</p>  
        <Speech
textAsButton={true}    
displayText="Rap!" 
text={playerOneTextToSpeech()}/>
          <div className="stage2">
          <div class="box bounce-7">{interpretPlayerOneScore()} </div>    
          </div>    
          <PlayerOneCalculateScore playerOneLineOne={playerOneLineOne} playerOneLineTwo={playerOneLineTwo} playerOneRhymeWordValue={playerOneRhymeWordValue} playerOneStarterWord={playerOneStarterWord} setPlayerOneAlliterationBonus={setPlayerOneAlliterationBonus} setPlayerOneAssonanceBonus={setPlayerOneAssonanceBonus} setPlayerOneFinalScore={setPlayerOneFinalScore}/> 
            </div>

        <div className="p2style">
        <p>{playerTwo.stageName}, your couplet is:</p>
        <p>{playerTwoLineOne}</p>
        <p>{playerTwoLineTwo}</p>
        <br/>
        <p>STARTER WORD SCORE: {playerTwoStarterWord.value}</p>
        <p>RHYME WORD SCORE: {playerTwoRhymeWordValue}</p>
        {playerTwoAlliterationBonus !== 0 ?
        <p>ALLITERATION BONUS: {playerTwoAlliterationBonus}</p>
        : null}
        {playerTwoAssonanceBonus !== 0 ?
        <p>ASSONANCE BONUS: {playerTwoAssonanceBonus}</p>
        : null}
        <p>FINAL SCORE: {playerTwoFinalScore}!</p>  
        <Speech
textAsButton={true}    
displayText="Rap!" 
text={playerTwoTextToSpeech()}
voice="Google UK English Female"/>
          <div className="stage2">
          <div class="box bounce-7">{interpretPlayerTwoScore()} </div>         
            
        <br/>
        </div>
        <PlayerTwoCalculateScore playerTwoLineOne={playerTwoLineOne} playerTwoLineTwo={playerTwoLineTwo} playerTwoRhymeWordValue={playerTwoRhymeWordValue} playerTwoStarterWord={playerTwoStarterWord} setPlayerTwoAlliterationBonus={setPlayerTwoAlliterationBonus} setPlayerTwoAssonanceBonus={setPlayerTwoAssonanceBonus} setPlayerTwoFinalScore={setPlayerTwoFinalScore}/>
        </div>
        </StylePoints>
        <br></br>
        <StyleResults>
        {(playerOneFinalScore) > (playerTwoFinalScore) ?
        
        <p className="winner">The winner is... {playerOne.stageName}! </p> :
        <p className="winner">The winner is... {playerTwo.stageName}! </p>}
        </StyleResults>
        <button onClick={handleNewTwoPlayerRoundSubmit}>Play another round?</button>
        <TwoPlayerUpdate handleRapPost={handleRapPost} scoreOne={playerOneFinalScore} playerOne={playerOne} setPlayerOne={setPlayerOne} playerOneLineOne={playerOneLineOne} playerOneLineTwo={playerOneLineTwo} scoreTwo={playerTwoFinalScore} playerTwo={playerTwo} setPlayerTwo={setPlayerTwo} playerTwoLineOne={playerTwoLineOne} playerTwoLineTwo={playerTwoLineTwo} onUpdate={handleDatabaseUpdate}/>
        </>
        : null}

        { showHallOfFame ?
        <>
        <HallOfFame players={players} handleHallOfFameClick={handleHallOfFameClick}/>
        </>
        : null}

        <Footer players={players}/>
        </>

        
    )
};

export default GameContainer;

  const SoloStyling = styled.div`
  font-weight: bold;
  flex: 1;
  flex-direction: row;
  width: 250px;
  height: 275px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  left: 0;
  box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, inset 0px 13px 0px 0px rgba(0,124,255,0);`

const StylePoints = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .p1style {
    font-weight: bold;
    flex: 1;
    flex-direction: row;
    width: 250px;
    height: 425px;
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
    height: 425px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    right: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }`

const StyleResults = styled.div`
margin: auto; 
width: 25%;
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
  font-size: 30px;
  text-align: center;
  border-radius: 10px;
  font-style: italic;
  width: 50px;
  height: 50px;
  margin: auto;`