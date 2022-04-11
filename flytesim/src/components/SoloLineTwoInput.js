import React, {useState, useEffect, Fragment} from "react";

const SoloLineTwoInput = ({soloLineTwo, setSoloLineTwo, handleSoloLineTwoSubmit}) => {

    const handleChange = (event) => {
        setSoloLineTwo(event.target.value)
    }

    return(
        <>
        <h3>Complete your second line!</h3>
        <form onSubmit={handleSoloLineTwoSubmit}>
        <input type="text" placeholder="Your line" name="name" value={soloLineTwo} onChange={handleChange}/>
        <button type="submit">Save</button>
        </form>
        </>
    )
}

export default SoloLineTwoInput;