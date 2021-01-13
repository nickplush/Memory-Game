import React, {useEffect, useState} from 'react';
import {Button, makeStyles, TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";

const useStyles = makeStyles({
    root: {
        width: '100%',
        minHeight: '100vh',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    button:{
        margin: 25
    }
});

const StartPage = () => {
    const gameData = JSON.parse(localStorage.getItem('game'))|| {players:[]}
    const [names, setNames] = useState([])
    const [value, setValue] = useState(gameData.lastPlayer ||'');


    const getPlayersNames = () =>{
        if (gameData.players){
            setNames(gameData.players)
        }
    }

    const savePlayer = () => {
        if (names.indexOf(value) === -1 ){
            names.push(value)
        }
            const newGameData = {...gameData, players: names, lastPlayer: value}
            localStorage.setItem('game', JSON.stringify(newGameData))
    }

    useEffect(()=> getPlayersNames(), [])

    const classes = useStyles()
    return(
        <div className={classes.root}>
            <br />
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}

                inputValue={value}
                onInputChange={(event, newValue) => {
                    setValue(newValue);
                }}
                id="controllable-states-demo"
                options={names}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="What your name?" variant="outlined" />}
            />
             <Button variant={"contained"}
                     color={"primary"}
                     className={classes.button}
                     onClick={savePlayer}
             >
                 start
             </Button>
        </div>
    )
}

export default StartPage
