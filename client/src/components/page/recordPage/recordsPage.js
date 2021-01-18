import React from 'react';
import {useSelector} from "react-redux";
import {
    Button,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    button: {
        background: "black",
        color: "white",
        margin: 10,
        '&:hover': {
            background: "white",
            color: "black",
        },
    }
});


const RecordsPage = () => {
    const classes = useStyles()
    const records = useSelector(state => state.records)
    const array = Object.keys(records).map(item=> ({name: item, time: records[item].time, score: records[item].score}))
    const rows = array.sort((a,b)=>b.score - a.score)
return (
    <div>
        <Link to={'/game'}>
            <Button variant={"contained"}
                    color={"primary"}
                    className={classes.button}
            >
                Restart
            </Button>
        </Link>
        <Link to={'/'}>
            <Button variant={"contained"}
                    className={classes.button}
                    color={"primary"}
            >
                reset game
            </Button>
        </Link>
        <Typography variant={'h3'}>Game Score</Typography>
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.time}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.score}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
)
}

export default RecordsPage
