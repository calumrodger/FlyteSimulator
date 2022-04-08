import React, {useState, useEffect, Fragment} from "react";
import PlayerForm from "./PlayerForm";

const NewGame = ({handlePlayerPost, onCreate, players, currentPlayer, setCurrentPlayer}) => {

    const [statePlayer, setStatePlayer] = useState({})

    const playerStageNames = players.map((player) => player.stageName)

    const handleChange = (event) => {
        setStatePlayer(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setStatePlayer(event.target.value)
        console.log(statePlayer)
      }

    return(
        <>
        <h3>Select Player</h3>
        <form>
        <select value={statePlayer} onChange={handleChange}>
        <option disabled>Choose...</option>
        {playerStageNames.map((stageName) => (<option>{stageName}</option>))}
        </select>
        <button onClick={handleSubmit}> Go</button>
        </form>
        </>
    )
}

export default NewGame;