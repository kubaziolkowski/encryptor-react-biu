import React, { Element,Component } from 'react';
import './App.css';

import Morse from "./components/Morse";
import Affinic from "./components/Affinic";
import Vigenere from "./components/Vigenere";


import {
    BrowserRouter as Router,
    Route,Routes
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
            <Routes>
                <Route exact path="/" element={<Morse/>}/>
                <Route exact path="/affinic" element={<Affinic/>}/>
                <Route exact path="/vigenere" element={<Vigenere/>}/>

                </Routes>
            </Router>
        );
    }
}

export default App;