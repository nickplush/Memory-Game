import './App.css';
import GamePage from "./components/page/gamePage/gamePage";
import {BrowserRouter, Route} from 'react-router-dom'
import StartPage from "./components/page/ startPage/startPage";

function App() {
    return (
        <BrowserRouter>
            <Route path={'/'} exact component={StartPage}/>
            <Route path={'/game'} component={GamePage}/>
        </BrowserRouter>
    );
}

export default App;
