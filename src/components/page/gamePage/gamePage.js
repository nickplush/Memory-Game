import React from 'react';
import AskAleks from './images/aa.png'
import Nirvana from './images/nirvana.png'
import Kish from './images/kish.png'
import TFK from './images/tfk.png'
import Am from './images/am.png'
import TGH from './images/tdg.png'
import Gd from './images/gd.png'
import LP from './images/lp.png'

import PlayingField from "./PlayingField";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

const GamePage = () => {
    const content = [AskAleks,Nirvana,Kish,TFK,Am,TGH,Gd,LP]

    const dblArr = () => {
        return content.concat(content)
    }

    const shuffleArray = (array) => {
        let newArray = array
        for (let i = newArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray
    }
    return (
        <div>
            <Button variant={"contained"}
                    color={"primary"}
            >
                <Link to={'/'}>reset game</Link>
            </Button>
            <PlayingField array={shuffleArray(dblArr())}/>
        </div>
    )
}

export default GamePage
