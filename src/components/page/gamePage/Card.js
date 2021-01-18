import React, {useEffect, useState} from 'react';
import {Grid, makeStyles, Paper} from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        padding:0
    },
    img: {
        height: 'auto',
        width: '30%'
    }
});

const Card = ({
                  item,
                  onClick,
                  id,
                  value,
                  done
              }) => {
    const classes = useStyles()
    const [isFlip,setIsFlip] = useState(false)

    useEffect(() => checkFlip(), [value, done])

    const checkFlip = () => {
        const stateNames = value.map(item => item.id)
        const inState = stateNames.indexOf(id)
        const isDone = done.indexOf(item)
        if(inState!==-1 || isDone!==-1){
            setIsFlip(true)
        }else {
            setIsFlip(false)
        }
    }

    const checkValue = () => {
        onClick(item, id)
    }

    return (
        <Grid item xs={3} className={classes.container} onClick={checkValue}>
            <div className={isFlip ? 'flip-container active' : 'flip-container'}>
                <div className="flipper">
                    <Paper className="front">
                    </Paper>
                    <Paper className="back">
                        <img className={classes.img} src={item}/>
                    </Paper>
                </div>
            </div>
        </Grid>
    )
}

export default Card
