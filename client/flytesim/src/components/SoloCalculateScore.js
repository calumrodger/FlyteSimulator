import React, {useState, useEffect, Fragment} from "react";
import { dictionary } from 'cmu-pronouncing-dictionary'
import styled from "styled-components"

const SoloCalculateScore = ({soloLineOne, soloLineTwo, setSoloAlliterationBonus, setSoloAssonanceBonus, setSoloFinalScore, soloStarterWord, soloRhymeWordValue}) => {

    let fullLineString = `${soloLineOne} ${soloLineTwo}`
    console.log(fullLineString)
    let fullLineArray = fullLineString.split(" ")
    console.log(fullLineArray);

    let phoneticArray = []
    for (let i = 0; i < fullLineArray.length; i++) {
        phoneticArray.push(dictionary[fullLineArray[i]])
      }
    console.log(phoneticArray);

    let undefinedsRemoved = phoneticArray.filter(function(x) {
        return x !== undefined;
    });
    console.log(undefinedsRemoved);

    let digitsRemoved = []
    for (let i = 0; i < undefinedsRemoved.length; i++) {
    digitsRemoved.push(undefinedsRemoved[i].replace(/[0-9]/g, ''))
    }
    console.log(digitsRemoved)

    let uniqueWords = digitsRemoved.filter((element, index) => {
    return digitsRemoved.indexOf(element) === index;
    })
    console.log(uniqueWords)

    let duplicateWords = digitsRemoved.filter((element, index) => {
    return digitsRemoved.indexOf(element) !== index;
    });
    console.log(duplicateWords)

    let uniqueDuplicateWords = duplicateWords.filter((element, index) => {
    return duplicateWords.indexOf(element) === index;
    });
    console.log(uniqueDuplicateWords);

    let allWordsNoTripleDuplicates = uniqueDuplicateWords.concat(uniqueWords)
    console.log(allWordsNoTripleDuplicates)

    let arrayOfWordArrays = []
    for (let i = 0; i < allWordsNoTripleDuplicates.length; i++) {
        let wordArray = (allWordsNoTripleDuplicates[i].split(" "))
        arrayOfWordArrays.push(wordArray)
      }
    console.log(arrayOfWordArrays)

    //ALLITERATION
    let firstLetters = [];

    for (let i = 0; i < arrayOfWordArrays.length; i++) {
        firstLetters.push(arrayOfWordArrays[i][0])
    }
    console.log(firstLetters);

    let uniqueFirstLetters = firstLetters.filter((element, index) => {
        return firstLetters.indexOf(element) === index;
        })
    console.log(uniqueFirstLetters)

    let alliterationScore = (firstLetters.length - uniqueFirstLetters.length)
    console.log(alliterationScore)

    //ASSONANCE
    let vowels = ["AA", "AE", "AH", "AO", "AW", "AX", "AXR", "AY", "EH", "ER", "EY", "IH", "IX", "IY", "OW", "OY", "UH", "UW", "UX"]

    let allSounds = [].concat.apply([], arrayOfWordArrays);
    console.log(allSounds)
    let allVowels = allSounds.filter(element => vowels.includes(element));
    console.log(allVowels)

    let allDuplicateVowels = allVowels.filter((element, index) => {
        return allVowels.indexOf(element) !== index;
        });
    console.log(allDuplicateVowels)

    let assonanceScore = allDuplicateVowels.length
    console.log(assonanceScore)
    setSoloAlliterationBonus(alliterationScore)
    setSoloAssonanceBonus(assonanceScore)
    let finalScore = (soloStarterWord.value + soloRhymeWordValue + alliterationScore + assonanceScore)
    setSoloFinalScore(finalScore)

    return(
        <PlayerRap>
        {fullLineString}
        </PlayerRap>
    )

}

export default SoloCalculateScore;

const PlayerRap = styled.div`
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: black;
    text-align: left;
    left: 10px;
    margin-top: 10%;
    margin-left: 25%;
    padding: 10px;
    width: 50%;
    background-color: white;
    border-radius: 20px 20px 20px 0px;`