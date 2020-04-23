import React from 'react';
import './Header.css';
//import LoginPage from '../LoginPage/LoginPage'

class Header extends React.Component {
    render() {
        return (
        <div className="Header">
            <div className="hero-img">
                <div className="layer">
                    <h1>Ethiopian Coffee</h1>
                    <h2>Shepherd's Brew!</h2>
                </div>
            </div>
        </div>
        )
    }
}

export default Header;