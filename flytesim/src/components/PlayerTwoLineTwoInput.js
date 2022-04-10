import React, {useState, useEffect, Fragment} from "react";

const PlayerTwoLineTwoInput = ({playerTwoLineTwo, setPlayerTwoLineTwo, handlePlayerTwoLineTwoSubmit}) => {

    const handleChange = (event) => {
        setPlayerTwoLineTwo(event.target.value)
    }

    return(
        <>
        <h3>Complete your second line!</h3>
        <form onSubmit={handlePlayerTwoLineTwoSubmit}>
        <input type="text" placeholder="Your line" name="name" value={playerTwoLineTwo} onChange={handleChange}/>
        <button type="submit">Save</button>
        </form>
        </>
    )
}

export default PlayerTwoLineTwoInput;