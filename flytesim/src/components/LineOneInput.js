import React, {useState, useEffect, Fragment} from "react";

const LineOneInput = ({soloLineOne, setSoloLineOne, handleLineOneSubmit}) => {

    const handleChange = (event) => {
        setSoloLineOne(event.target.value)
    }

    return(
        <>
        <form onSubmit={handleLineOneSubmit}>
        <input type="text" placeholder="Your line" name="name" value={soloLineOne} onChange={handleChange}/>
        <button type="submit">Save</button>
        </form>
        </>
    )
}

export default LineOneInput;