
import React, {useState, useEffect, Fragment} from "react";
import PlayerForm from "./PlayerForm";
import styled from "styled-components";
import uisound from '../sounds/uisounds.mp3'


const NewGame = ({players, setSoloPlayer, handleCreateNewPlayerSubmit, setShowNewGame, setShowStarterWords, setPlayerOne, setPlayerTwo, setShowPlayerOneStarterWords, handleHallOfFameClick}) => {

    const [playerIndexValue, setPlayerIndexValue] = useState(null)

    const [showSplashScreen, setShowSplashScreen] = useState(true)
    const [showSoloPlayerSelectScreen, setShowSoloPlayerSelectScreen] = useState(false)
    const [showPlayerOneSelectScreen, setShowPlayerOneSelectScreen] = useState(false)
    const [showPlayerTwoSelectScreen, setShowPlayerTwoSelectScreen] = useState(false)

    const audio = new Audio(
        uisound
    );



    const handleChange = (event) => {
        setPlayerIndexValue(event.target.value)
    }

    const playSoloRoundSubmit = (event) => {
        event.preventDefault()
        setShowSplashScreen(false)
        setShowSoloPlayerSelectScreen(true)
        audio.play();
    }

    const playTwoPlayerRoundSubmit = (event) => {
        event.preventDefault()
        setShowSplashScreen(false)
        setShowPlayerOneSelectScreen(true)
        audio.play();
    }

    const handleSelectSoloPlayerSubmit = (event) => {
        event.preventDefault()
        const selectedPlayer = players[playerIndexValue]
        setSoloPlayer(selectedPlayer)
        setShowNewGame(false)
        setShowStarterWords(true) 
    }

    const handleSelectPlayerOneSubmit = (event) => {
        event.preventDefault()
        const selectedPlayer = players[playerIndexValue]
        setPlayerOne(selectedPlayer)
        setShowPlayerOneSelectScreen(false)
        setShowPlayerTwoSelectScreen(true)

    }

    const handleSelectPlayerTwoSubmit = (event) => {
        event.preventDefault()
        const selectedPlayer = players[playerIndexValue]
        setPlayerTwo(selectedPlayer)
        setShowPlayerTwoSelectScreen(false)
        setShowNewGame(false)
        setShowPlayerOneStarterWords(true)

    }

    

    const playerOptions = players.map((player, index) => {
        return <option key={index} value={index}>{`${player.stageName} (${player.name})`}</option>
    })







    return(
        <>
        {showSplashScreen ?
        <>
        <StartButtons>
            <HowToPlay>
        <h3>HOW TO PLAY</h3>
        <p>The aim is to write a killer rhyming couplet that will slay your opponent!</p>
        <p>Choose your rhyming words and complete the lines with your poetic skills.</p>
        <p></p>
        <p></p>
        </HowToPlay>
        <p>
        <button onClick={playSoloRoundSubmit}>Play solo round</button>
        </p>
        
        <p>
        <button onClick={playTwoPlayerRoundSubmit}>Play two player</button>
        </p>
        <p>
        <button onClick={handleHallOfFameClick}>Hall of Fame</button>
        </p>
        </StartButtons>
                <InfoText>
   
   Flyting (Scots: “quarreling,” or “contention”)<br/> Poetic competition of the Scottish makaris (poets) of the 15th and 16th centuries,<br/> in which two highly skilled rivals engaged in a contest of verbal abuse. <br/>Remarkable for its fierceness and extravagance.

   </InfoText>


        </>
        : null }
    
        {showSoloPlayerSelectScreen ? 
        <>
        <h3>Select Player</h3>
        <form>
        <select value={players.stageName} onChange={handleChange}>
        <option disabled selected>Choose...</option>
        {playerOptions}
        </select>
        <button onClick={handleSelectSoloPlayerSubmit}> Go</button>
        </form>
        <h3>Or.. Create new Player</h3>
        <button onClick={handleCreateNewPlayerSubmit}>Go</button>
        </>
        : null}

        {showPlayerOneSelectScreen ? 
        <>
        <h3>Player One, Select Player</h3>
        <form>
        <select value={players.stageName} onChange={handleChange}>
        <option disabled selected>Choose...</option>
        {playerOptions}
        </select>
        <button onClick={handleSelectPlayerOneSubmit}> Go</button>
        </form>
        <h3>Or.. Create new Player</h3>
        <button onClick={handleCreateNewPlayerSubmit}>Go</button>
        </>
        : null}

    {showPlayerTwoSelectScreen ? 
        <>
        <h3>Player Two, Select Player</h3>
        <form>
        <select value={players.stageName} onChange={handleChange}>
        <option disabled selected>Choose...</option>
        {playerOptions}
        </select>
        <button onClick={handleSelectPlayerTwoSubmit}> Go</button>
        </form>
        <h3>Or.. Create new Player</h3>
        <button onClick={handleCreateNewPlayerSubmit}>Go</button>
        </>
        : null}

        </>
    )
}

export default NewGame;

const StartButtons = styled.div`
    display: flex;
    flex-direction: column;


    margin-top: 10%;
    margin-bottom: 0;


    p {
        margin: 15px;
        padding: 0;
    }`

const InfoText = styled.div`
display: flex;
font-size: 1.2rem;
font-family: "Roboto", sans-serif;
color: #fff;
background-color: black;
opacity: 0.8;
padding: 10px;
justify-content: center;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-left: auto;
  margin-right: auto;
    width: 45%;

    `

    const HowToPlay = styled.div`
    align-items: center;
    color: white;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
    margin-top: 0%;
    margin-bottom: 0;
    background-color: #019DE0;
    opacity: 0.8;
    padding: 10px;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-left: auto;
    margin-right: auto;
    width: 30%;`