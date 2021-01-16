import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from "react-router-dom";

const ModalWindow = ({open, errors, time}) => {
    const timeIsSek = time / 1000
    const score = 100
    const scoreCof = 0.25
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
                    <div>score: {Math.round(score-(scoreCof*(timeIsSek+errors*10)))}</div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Link to={'/game'}>
                    <Button color="primary">
                        Restart Game
                    </Button>
                </Link>
                <Link to={'/'}>
                    <Button color="primary">
                        Reset Game
                    </Button>
                </Link>
            </DialogActions>
        </Dialog>
    );
}
export default ModalWindow
