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

    useEffect(()=>{
        if(done.length === array.length/2){
            setTime(new Date().getTime()- time)
            setOpen(true)
        }
        console.log('LOOOG', time)
    },[done])
    useEffect(()=>startGame(),[])
    useEffect(()=> {
        if (state.length === 2) {
            const check = state[0].id !== state[1].id && state[0].value === state[1].value
            if(check){
                setDone([...done, state[0].value])
            }
            else {
                setError(error+1)
            }
            setTimeout(()=> setState([]), 800)
        }
    }, [state])

    const startGame = () => {
        setTimeout(()=>{

            setDone([])
            const timeNow = new Date().getTime()
            setTime(timeNow)
        }, 5000)
    }

    const checkValue = (newValue, i) => {
        if (state.length < 2) {
            setState([...state, {id: i, value: newValue}])
        }
    }

    return (
        <div>
            <Grid container spacing={12}>
                {array.map((item, i) => <Card key={i}
                                              id={i}
                                              item={item}
                                              done={done}
                                              onClick={checkValue}
                                              value={state}/>
                )}
            </Grid>
            <ModalWindow open={open} errors={error} time={time}/>
        </div>
    )
}

export default PlayingField
