import React, {useState, useEffect, Fragment} from "react";
import flytesimbeat from '../sounds/flytesimbeat.mp3'

const PlayerTwoLineTwoInput = ({playerTwoLineTwo, setPlayerTwoLineTwo, handlePlayerTwoLineTwoSubmit}) => {

    const handleChange = (event) => {
        setPlayerTwoLineTwo(event.target.value)
    }

    const audio = new Audio(
        flytesimbeat
    );

    const playSound = () => {
        audio.play();
    }

    return(
        <>
        <h3>Complete your second line!</h3>
        <form onSubmit={handlePlayerTwoLineTwoSubmit}>
        <input type="text" placeholder="Your line" name="name" value={playerTwoLineTwo} onChange={handleChange}/>
        <button type="submit" onClick={playSound}>Save</button>
        </form>
        </>
    )
}

export default PlayerTwoLineTwoInput;