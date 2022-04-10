import React, {useState, useEffect, Fragment} from "react";

const LineTwoInput = ({soloLineTwo, setSoloLineTwo, handleLineTwoSubmit}) => {

    const handleChange = (event) => {
        setSoloLineTwo(event.target.value)
    }

    return(
        <>
        <h3>Complete your second line!</h3>
        <form onSubmit={handleLineTwoSubmit}>
        <input type="text" placeholder="Your line" name="name" value={soloLineTwo} onChange={handleChange}/>
        <button type="submit">Save</button>
        </form>
        </>
    )
}

export default LineTwoInput;