import React, {useState, useEffect, Fragment} from "react";
import { dictionary } from 'cmu-pronouncing-dictionary'

const CalculateScore = ({soloLineOne, soloLineTwo}) => {

    let fullLine = `${soloLineOne} ${soloLineTwo}`
    let fullLineArray = fullLine.split(" ")
    let newArray = []
    console.log(dictionary['hello'])
    console.log(fullLineArray)
    for (let i = 0; i < fullLineArray.length; i++) {
        newArray.push(dictionary[fullLineArray[i]])
      }
    console.log(newArray)
    var filteredArray = newArray.filter(function(x) {
        return x !== undefined;
   });
   console.log(filteredArray)
   


    return(
        <>
        {fullLine}
        </>
    )

}

export default CalculateScore;