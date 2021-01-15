import React, {useEffect, useState} from 'react';
import {Button, makeStyles, TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: '100%',
        minHeight: '100vh',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        margin: 25
    }
});

const StartPage = () => {
    const gameData = JSON.parse(localStorage.getItem('game')) || {players: []}
    const [names, setNames] = useState([])
    const [value, setValue] = useState(gameData.lastPlayer || '');


    const getPlayersNames = () => {
        if (gameData.players) {
            setNames(gameData.players)
        }
    }

    const savePlayer = () => {
        if (names.indexOf(value) === -1) {
            names.push(value)
        }
        const newGameData = {...gameData, players: names, lastPlayer: value}
        localStorage.setItem('game', JSON.stringify(newGameData))
    }

    const renderButton = () => {
        if (!value) {
            return (
                <Button variant={"contained"}
                        disabled
                        className={classes.button}
                >
                    start
                </Button>
            )
        }
        return (
            <Button variant={"contained"}
                    color={"primary"}
                    className={classes.button}
                    onClick={savePlayer}
            >
                <Link to={'/game'}>start</Link>
            </Button>
        )
    }

    useEffect(() => getPlayersNames(), [])

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <br/>
            <Autocomplete
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={value || ''}
                onInputChange={(event, newValue) => {
                    setValue(newValue);
                }}
                freeSolo
                id="free-solo-demo"
                options={names.map((option) => option)}
                style={{width: 300}}
                renderInput={(params) => (
                    <TextField {...params} label="Who are you?" margin="normal" variant="outlined"/>
                )}
            />
            {renderButton()}
        </div>
    )
}

export default StartPage
