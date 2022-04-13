import React, {useState, useEffect, Fragment} from "react";

const PlayerTwoLineOneInput = ({playerTwoStarterWord, playerTwoLineOne, setPlayerTwoLineOne, handlePlayerTwoLineOneSubmit}) => {

    const handlePlayerTwoChange = (event) => {
        setPlayerTwoLineOne(event.target.value)
    }

    return(
        <>
        <form onSubmit={handlePlayerTwoLineOneSubmit}>
        <input type="text" placeholder="Your line" name="name" value={playerTwoLineOne} onChange={handlePlayerTwoChange}/>
        <input type="text" value={playerTwoStarterWord.word} id="unselectable"></input>
        <button type="submit">Save</button>
        </form>
        </>
    )
}

export default PlayerTwoLineOneInput;