import React, {useState} from "react";
import PlayerForm from "./PlayerForm";

const NewGame = ({handlePlayerPost, players, currentPlayer, setCurrentPlayer}) => {

    const [selectedPlayer, setSelectedPlayer] = ([])

    const handleAnswerChange1 = (event) => {
        setSelectedPlayer(event.target.value)
    }

    return(
        <>
        <PlayerForm onCreate={handlePlayerPost}/>
        <h3>Select Player</h3>
        {/* <select value={selectedPlayer} onChange={handleAnswerChange1}>
        <option disabled>Choose...</option>
        {players.map((name) => (<option>{players.name}</option>))}
        </select> */}
        </>
    )
}

export default NewGame;