import {BrowserRouter, Route, Redirect,Switch} from 'react-router-dom'
import {useSelector} from "react-redux";
import RecordsPage from "../page/recordPage/recordsPage";
import GamePage from "../page/gamePage/gamePage";
import StartPage from "../page/ startPage/startPage";

function Router() {
    const gameData = useSelector(state => state)
    console.log('LOOOG', Boolean(gameData.records))
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact component={StartPage}/>
                {gameData.lastPlayer &&
                <Route path={'/game'} component={GamePage}/>
                }
                {Boolean(gameData.records) &&
                <Route path={'/records'} component={RecordsPage}/>
                }
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
