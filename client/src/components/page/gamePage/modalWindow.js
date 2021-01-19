import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeRecords} from "../../../actions/gameInfoActions";

const ModalWindow = ({open, errors, time, restart}) => {
    const dispatch = useDispatch()
    const gameInfo = useSelector(state => state)
    const timeIsSek = time / 1000
    const score = 100
    const scoreCof = 0.25
    const playerScore = score - (scoreCof * (timeIsSek + errors * 5)) < 0 ? 0 : score - (scoreCof * (timeIsSek + errors * 5))
    const results = {...gameInfo.records, [gameInfo.lastPlayer]: {score: Math.round(playerScore), time: timeIsSek}}


    useEffect(() => {dispatch(changeRecords(results))},[])
    useEffect(()=> localStorage.setItem('game',JSON.stringify({...gameInfo,records: results})),[])

    return (
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"You made it!"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div>errors: {errors}</div>
                    <div>time: {timeIsSek} s</div>
                    <div>score: {Math.round(playerScore)}</div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Link to={'/game'}>
                    <Button color="primary" onClick={restart}>
                        Restart Game
                    </Button>
                </Link>
                <Link to={'/'}>
                    <Button color="primary">
                        Reset Game
                    </Button>
                </Link>
                <Link to={'/records'}>
                    <Button color="primary">
                        Results
                    </Button>
                </Link>
            </DialogActions>
        </Dialog>
    );
}
export default ModalWindow
