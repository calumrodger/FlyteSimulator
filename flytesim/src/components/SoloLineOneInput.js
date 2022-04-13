import React, {useState, useEffect, Fragment} from "react";

const SoloLineOneInput = ({soloStarterWord, soloLineOne, setSoloLineOne, handleSoloLineOneSubmit}) => {

    

    const handleChange = (event) => {
        setSoloLineOne(event.target.value)
    }

    return(
        <>
        <form onSubmit={handleSoloLineOneSubmit}>
        <input type="text" placeholder="Your line" name="name" value={soloLineOne} onChange={handleChange}/>
        <input type="text" value={soloStarterWord.word} id="unselectable"></input>
        <button type="submit">Save</button>
        </form>
        </>
    )
}

export default SoloLineOneInput;