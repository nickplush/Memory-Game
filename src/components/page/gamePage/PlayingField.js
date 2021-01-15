import React, {useEffect, useState} from 'react';
import {Grid, Typography} from "@material-ui/core";
import Card from "./Card";


const PlayingField = ({array}) => {
    const [state, setState] = useState([])
    const [done, setDone] = useState([1,2,3,4,5,6,7,8])

    useEffect(()=>nullDone(),[])
    useEffect(()=> {
        if (state.length === 2) {
            const check = state[0].id !== state[1].id && state[0].value === state[1].value
            if(check){
                setDone([...done, state[0].value])
            }
            setTimeout(()=> setState([]), 800)
        }
    }, [state])

    const nullDone = () => {
        setTimeout(()=>setDone([]), 3000)
    }

    const checkValue = (newValue, i) => {
        setState([...state, {id: i, value: newValue}])
    }

    return (
        <div>
            <Typography>
                score: {score}
            </Typography>
            <Grid container spacing={12}>
                {array.map((item, i) => <Card key={i}
                                              id={i}
                                              item={item}
                                              done={done}
                                              onClick={checkValue}
                                              value={state}
                    />
                )}
            </Grid>
        </div>
    )
}

export default PlayingField
