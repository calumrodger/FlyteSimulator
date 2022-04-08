import React, {useState, useEffect, Fragment} from "react";
import PlayerForm from "./PlayerForm";

const NewGame = ({players, setCurrentPlayer}) => {

    const [playerIndexValue, setPlayerIndexValue] = useState(null)

    const handleChange = (event) => {
        setPlayerIndexValue(event.target.value)
    }

    const handleSelectPlayerSubmit = (event) => {
        event.preventDefault()
        const selectedPlayer = players[playerIndexValue]
        setCurrentPlayer(selectedPlayer)
    
    }

    const playerOptions = players.map((player, index) => {
        return <option key={index} value={index}>{player.stageName}</option>
    })



    return(
        <>
        <h3>Select Player</h3>
        <form>
        <select value={players.stageName} onChange={handleChange}>
        <option disabled>Choose...</option>
        {playerOptions}
        </select>
        <button onClick={handleSelectPlayerSubmit}> Go</button>
        </form>
        </>
    )
}

export default NewGame;