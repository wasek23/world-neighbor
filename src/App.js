import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import Login from './components/Login/Login';

function App() {
    return (
        <div>
            <Header></Header>
            <Login></Login>
            <Users></Users>

            <footer>&copy; 2020 | All right reserved by <a href="/">World Neighbor</a></footer>
        </div>
    );
}

export default App;
