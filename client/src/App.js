import './App.css';
import {useDispatch} from "react-redux";
import {getGameInfo} from "./actions/gameInfoActions";
import Router from "./components/router/Router";

function App() {
    const dispatch = useDispatch()
    const gameData = JSON.parse(localStorage.getItem('game')) || {}
    dispatch(getGameInfo(gameData))
    return <Router/>
}

export default App;
