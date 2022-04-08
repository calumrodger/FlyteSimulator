import React, {useState, useEffect, Fragment} from "react";
import PlayerForm from "./PlayerForm";

const NewGame = ({players, setCurrentPlayer, handleSelectPlayerSubmit}) => {

    const handleChange = (event) => {
        setCurrentPlayer(event.target.value)
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