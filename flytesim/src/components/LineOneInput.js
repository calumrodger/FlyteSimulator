import React, {useState, useEffect, Fragment} from "react";

const LineOneInput = ({starterWord, lineOne, setLineOne, handleLineOneSubmit}) => {

    const handleChange = (event) => {
        setLineOne(event.target.value)
    }

    return(
        <>
        <h3>Complete your first line!</h3>
        <form onSubmit={handleLineOneSubmit}>
        <input type="text" placeholder="Your line" name="name" value={lineOne} onChange={handleChange}/>
        <button type="submit">Save</button>
        </form>
        </>
    )
}

export default LineOneInput;