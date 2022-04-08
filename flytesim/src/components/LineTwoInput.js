import React, {useState, useEffect, Fragment} from "react";

const LineTwoInput = ({rhymeWord, lineTwo, setLineTwo, handleLineTwoSubmit}) => {

    const handleChange = (event) => {
        setLineTwo(event.target.value)
    }

    return(
        <>
        <h3>Complete your second line!</h3>
        <form onSubmit={handleLineTwoSubmit}>
        <input type="text" placeholder="Your line" name="name" value={lineTwo} onChange={handleChange}/>
        <button type="submit">Save</button>
        </form>
        </>
    )
}

export default LineTwoInput;