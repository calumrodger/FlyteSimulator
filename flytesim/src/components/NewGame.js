import React, {useState, useEffect, Fragment} from "react";
import PlayerForm from "./PlayerForm";
import styled from "styled-components";

const NewGame = ({players, setSoloPlayer, handleCreateNewPlayerSubmit, setShowNewGame, setShowStarterWords, setSoloPlayerSelected, setTwoPlayerSelected, setPlayerOne, setPlayerTwo, setShowPlayerOneStarterWords}) => {

    const [playerIndexValue, setPlayerIndexValue] = useState(null)

    const [showSplashScreen, setShowSplashScreen] = useState(true)
    const [showSoloPlayerSelectScreen, setShowSoloPlayerSelectScreen] = useState(false)
    const [showPlayerOneSelectScreen, setShowPlayerOneSelectScreen] = useState(false)
    const [showPlayerTwoSelectScreen, setShowPlayerTwoSelectScreen] = useState(false)

    const handleChange = (event) => {
        setPlayerIndexValue(event.target.value)
    }

    const playSoloRoundSubmit = (event) => {
        event.preventDefault()
        setSoloPlayerSelected(true)
        setShowSplashScreen(false)
        setShowSoloPlayerSelectScreen(true)
    }

    const playTwoPlayerRoundSubmit = (event) => {
        event.preventDefault()
        setShowSplashScreen(false)
        setTwoPlayerSelected(true)
        setShowPlayerOneSelectScreen(true)
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
        return <option key={index} value={index}>{player.stageName}</option>
    })



    return(
        <>
        {showSplashScreen ?
        <>
        <StartButtons>
        <p>
        <button onClick={playSoloRoundSubmit}>Play solo round</button>
        <button onClick={playTwoPlayerRoundSubmit}>Play two player</button>
        </p>
        </StartButtons>
        </>
        : null }
    
        {showSoloPlayerSelectScreen ? 
        <>
        <h3>Select Player</h3>
        <form>
        <select value={players.stageName} onChange={handleChange}>
        <option disabled>Choose...</option>
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
        <option disabled>Choose...</option>
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
        <option disabled>Choose...</option>
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
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    margin-bottom: 10%;
    padding: 10px;
    margin-left: 10%;
    p {
        margin: 0;
        padding: 0;
    }`