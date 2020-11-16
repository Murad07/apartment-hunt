import React from 'react';
import { faHome, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './SideBar.css';
import logo from '../../../logos/logo.png';


const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled mt-3">
            <Link to="/home"><img src={logo} alt="..." class="img-thumbnail mb-4"></img></Link>
             
        <div>
            <li>
                <Link to="/bookingList" className="text-dark ml-3">
                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Booking List</span> 
                </Link>
            </li>
            <li>
                <Link to="/addHouse" className="text-dark mr-1" style={{ marginLeft:'30px' }}>
                    <FontAwesomeIcon icon={faPlus} /> <span>Add House</span> 
                </Link>
            </li>
            <li>
                <Link to="/rent" className="text-dark mr-1">
                    <FontAwesomeIcon icon={faHome} /> <span>My Rent</span>
                </Link>
            </li>
            </div>
           
        </ul>
            
        
    </div>
    );
};

export default Sidebar;