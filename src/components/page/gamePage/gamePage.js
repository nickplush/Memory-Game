import React from 'react';

import PlayingField from "./PlayingField";

const GamePage = () => {
    const content = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]

    const shuffleArray = (array) => {
        let newArray = array
        for (let i = newArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray
    }
    return (
        <PlayingField array={shuffleArray(content)}/>
    )
}

export default GamePage
