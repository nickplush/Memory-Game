import React, {useEffect, useState} from 'react';
import {Grid} from "@material-ui/core";
import Card from "./Card";
import ModalWindow from "./modalWindow";

const PlayingField = ({array}) => {
    const [state, setState] = useState([])
    const [done, setDone] = useState([...array])
    const [error, setError] = useState(0)
    const [open, setOpen] = useState(false)
    const [time, setTime] = useState(0)

    useEffect(() => {
        if (done.length === array.length / 2) {
            setTime(new Date().getTime() - time)
            setOpen(true)
        }
    }, [done])
    useEffect(() => startGame(), [])
    useEffect(() => {
        if (state.length === 2) {
            const check = state[0].id !== state[1].id && state[0].value === state[1].value
            if (check) {
                setDone([...done, state[0].value])
            } else {
                setError(error + 1)
            }
            setTimeout(() => setState([]), 800)
        }
    }, [state])

    const restart = () => {
        setDone([...array])
        setOpen(false)
        setError(0)
        setTime(0)
        startGame()
    }

    const startGame = () => {
        setTimeout(() => {
            setDone([])
            const timeNow = new Date().getTime()
            setTime(timeNow)
            setState([])
        }, 5000)
    }

    const checkValue = (newValue, i) => {
        if (state.length < 2) {
            setState([...state, {id: i, value: newValue}])
        }
    }

    return (
        <div>
            <Grid container spacing={3} justify={"center"}>
                {array.map((item, i) => <Card key={i}
                                              id={i}
                                              item={item}
                                              done={done}
                                              onClick={checkValue}
                                              value={state}/>
                )}
            </Grid>
            {open &&
            <ModalWindow open={open} errors={error} time={time} restart={restart}/>
            }
        </div>
    )
}

export default PlayingField
