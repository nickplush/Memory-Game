import './App.css';
import GamePage from "./components/page/gamePage/gamePage";
import {BrowserRouter, Route} from 'react-router-dom'
import StartPage from "./components/page/ startPage/startPage";
import {useDispatch} from "react-redux";
import {getGameInfo} from "./actions/gameInfoActions";

function App() {
    const dispatch = useDispatch()
    const gameData = JSON.parse(localStorage.getItem('game')) || {}
    dispatch(getGameInfo(gameData))
    return (
        <BrowserRouter>
            <Route path={'/'} exact component={StartPage}/>
            <Route path={'/game'} component={GamePage}/>
        </BrowserRouter>
    );
}

export default App;
