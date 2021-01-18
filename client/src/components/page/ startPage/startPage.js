import React, {useEffect, useState} from 'react';
import {Button, makeStyles, TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {Link} from "react-router-dom";
import logo from './images/logo.png'
import {useDispatch, useSelector} from "react-redux";
import {getGameInfo} from "../../../actions/gameInfoActions";

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
        background: "black",
        color: "white",
        margin: 25,
        '&:hover': {
            background: "white",
            color: "black",
        },
    },
    logo: {
        maxWidth:'90%'
    }
});

const StartPage = () => {
    const dispatch = useDispatch()
    const gameData = useSelector(state => state)
    const [names, setNames] = useState([])
    const lastPlayers = gameData.lastPlayer || ''
    const [value, setValue] = useState('');


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
        dispatch(getGameInfo(newGameData))
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
            <Link to={'/game'}>
                <Button variant={"contained"}
                        color={"primary"}
                        className={classes.button}
                        onClick={savePlayer}
                >
                    start
                </Button>
            </Link>
        )
    }

    useEffect(() => getPlayersNames(), [])

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img src={logo} className={classes.logo}/>
            <br/>
            <Autocomplete
                value={lastPlayers}
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
                style={{width: '300px'}}
                renderInput={(params) => (
                    <TextField {...params} label="Who are you?" margin="normal" variant="outlined"/>
                )}
            />
            {renderButton()}
        </div>
    )
}

export default StartPage
