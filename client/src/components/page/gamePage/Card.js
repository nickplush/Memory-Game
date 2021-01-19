import React, {useEffect, useState} from 'react';
import {Grid, makeStyles, Paper} from "@material-ui/core";
import fon from './images/fon.png'

const useStyles = makeStyles({
    img: {
        height: '30%',
        width: 'auto'
    },
    logo: {
        height: '60%',
        width: 'auto'
    },
    container: {
        margin: 0,
        width: '100%',
        padding: 20
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
    const [isFlip, setIsFlip] = useState(false)

    useEffect(() => checkFlip(), [value, done])

    const checkFlip = () => {
        const stateNames = value.map(item => item.id)
        const inState = stateNames.indexOf(id)
        const isDone = done.indexOf(item)
        if (inState !== -1 || isDone !== -1) {
            setIsFlip(true)
        } else {
            setIsFlip(false)
        }
    }

    const checkValue = () => {
        if (!isFlip) {
            onClick(item, id)
        }
    }

    return (
        <Grid item xs={3} className={classes.container} onClick={checkValue}>
            <div className={isFlip ? 'flip-container active' : 'flip-container'}>
                <div className="flipper">
                    <Paper className="front">
                        <img className={classes.logo} src={fon}/>
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
