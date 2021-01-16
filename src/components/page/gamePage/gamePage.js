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
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    button: {
        background: "black",
        color: "white",
        margin: 10,
        '&:hover': {
            background: "white",
            color: "black",
        },
    }
});

const GamePage = () => {
    const content = [AskAleks, Nirvana, Kish, TFK, Am, TGH, Gd, LP]
    const classes = useStyles()
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
            <Link to={'/'}>
                <Button variant={"contained"}
                        color={"primary"}
                        className={classes.button}
                >
                    reset game
                </Button>
            </Link>
            <PlayingField array={shuffleArray(dblArr())}/>
        </div>
    )
}

export default GamePage
