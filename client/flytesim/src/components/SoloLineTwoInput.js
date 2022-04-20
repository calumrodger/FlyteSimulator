import React, {useState, useEffect, Fragment} from "react";
import flytesimbeat from '../sounds/flytesimbeat.mp3'

const SoloLineTwoInput = ({soloRhymeWord, soloLineTwo, setSoloLineTwo, handleSoloLineTwoSubmit}) => {

    const handleChange = (event) => {
        setSoloLineTwo(event.target.value)
    }

    const audio = new Audio(
        flytesimbeat
    );

    const playSound = () => {
        audio.play();
    }

    return(
        <>
        <form onSubmit={handleSoloLineTwoSubmit}>
        <input type="text" placeholder="Your line" name="name" value={soloLineTwo} onChange={handleChange}/>
        <input type="text" value={soloRhymeWord.word} id="unselectable"></input>
        <button type="submit" onClick={playSound}>Save</button>
        </form>
        </>
    )
}

export default SoloLineTwoInput;