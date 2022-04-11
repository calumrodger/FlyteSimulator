import React, {useState, useEffect, Fragment} from "react";

const PlayerTwoLineOneInput = ({playerTwoLineOne, setPlayerTwoLineOne, handlePlayerTwoLineOneSubmit}) => {

    const handlePlayerTwoChange = (event) => {
        setPlayerTwoLineOne(event.target.value)
    }

    return(
        <>
        <form onSubmit={handlePlayerTwoLineOneSubmit}>
        <input type="text" placeholder="Your line" name="name" value={playerTwoLineOne} onChange={handlePlayerTwoChange}/>
        <button type="submit">Save</button>
        </form>
        </>
    )
}

export default PlayerTwoLineOneInput;