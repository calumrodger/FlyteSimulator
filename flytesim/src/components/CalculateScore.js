import React, {useState, useEffect, Fragment} from "react";
import { dictionary } from 'cmu-pronouncing-dictionary'

const CalculateScore = ({soloLineOne, soloLineTwo}) => {

    let vowels = []
    let consonants = []

    let fullLineString = `${soloLineOne} ${soloLineTwo}`
    let fullLineArray = fullLineString.split(" ")
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
   let noDigitsArray = []
   for (let i = 0; i < filteredArray.length; i++) {
    noDigitsArray.push(filteredArray[i].replace(/[0-9]/g, ''))
  }
   console.log(noDigitsArray)
   


    return(
        <>
        {fullLineString}
        </>
    )

}

export default CalculateScore;