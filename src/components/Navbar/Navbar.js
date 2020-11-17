import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/logo.png'

const Navbar = () => {
        let user = sessionStorage.getItem('signIn');
        let loginUser = JSON.parse(user);
        const signOut = ()=>{
            sessionStorage.clear();
        }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light mx-3">
                <Link className="navbar-brand" to="/home">
                    <img src={logo} height="45" class="d-inline-block align-top" alt="" loading="lazy"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-black" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#service">Service</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to="/concerns">Concerns</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to="/event">Event</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to="/bookingList">DashBoard</Link>
                    </li>
                    <li className="nav-item">
                        {!loginUser && <Link  className="text-white btn brand-btn" to="/bookingList">Login</Link>}
                        {loginUser && <Link onClick={signOut} className="text-white btn brand-btn" to="/bookingList">Log Out</Link>}
                    </li>
                    </ul>
                </div>
                </nav>
        </div>
    );
};

export default Navbar;