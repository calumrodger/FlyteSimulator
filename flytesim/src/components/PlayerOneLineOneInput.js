import React, {useState, useEffect, Fragment} from "react";

const SoloLineOneInput = ({playerOneLineOne, setPlayerOneLineOne, handlePlayerOneLineOneSubmit}) => {

    const handlePlayerOneChange = (event) => {
        setPlayerOneLineOne(event.target.value)
    }

    return(
        <>
        <form onSubmit={handlePlayerOneLineOneSubmit}>
        <input type="text" placeholder="Your line" name="name" value={playerOneLineOne} onChange={handlePlayerOneChange}/>
        <button type="submit">Save</button>
        </form>
        </>
    )
}

export default SoloLineOneInput;