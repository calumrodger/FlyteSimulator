import React, {useState, useEffect, Fragment} from "react";

const PlayerOneLineTwoInput = ({playerOneRhymeWord, playerOneLineTwo, setPlayerOneLineTwo, handlePlayerOneLineTwoSubmit}) => {

    const handleChange = (event) => {
        setPlayerOneLineTwo(event.target.value)
    }

    return(
        <>
        <h3>Complete your second line!</h3>
        <form onSubmit={handlePlayerOneLineTwoSubmit}>
        <input type="text" placeholder="Your line" name="name" value={playerOneLineTwo} onChange={handleChange}/>
        <input type="text" value={playerOneRhymeWord.word} id="unselectable"></input>
        <button type="submit">Save</button>
        </form>
        </>
    )
}

export default PlayerOneLineTwoInput;