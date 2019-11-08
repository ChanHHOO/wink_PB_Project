import React from 'react';
import ReactDOM from 'react-dom';
import Daun from './Daun';
import { BrowserRouter as Router } from 'react-router-dom';
export {default as Hero} from './Layout/Hero';
export {default as Navigation} from './Layout/Navigation';
export {default} from './Daun';
export {default as Board} from './Components/Board';
export {default as About} from './Components/About';
export {default as MyBoard} from './Components/MyBoard';
export {default as MyPage} from './Components/MyPage';

ReactDOM.render(
    <Router>
        <Daun />
    </Router>
, document. getElementById('root'));