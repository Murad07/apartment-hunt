import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faPlus, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";
import logo from '../../../logos/logo.png';


const SideBar = () => {
     
  return (
    <div className="sidebar-container">
      <img
        className="img-thumbnail mb-2" style={{width:'120px', marginLeft:'20px'}}
        src={logo}
        alt=""
      />
      <div className="mt-5 pb-sm-5">

          <>
            <Link to="/bookingList">
              <FontAwesomeIcon
                icon={faShoppingCart}
              ></FontAwesomeIcon>
              &nbsp;&nbsp;
              <span className="d-md-inline-block d-none">Booking List</span>
            </Link>
            <br />
            <Link to="/addHouse">
              <FontAwesomeIcon
               
                icon={faPlus}
              ></FontAwesomeIcon>
              &nbsp;&nbsp;
              <span className="d-md-inline-block d-none">Add House</span>
            </Link>
            <br />
            <Link to="/rent">
              <FontAwesomeIcon
              
                icon={faHome}
              ></FontAwesomeIcon>
              &nbsp;&nbsp;
              <span className="d-md-inline-block d-none">My Rent</span>
            </Link>
          </>
        

        <br />
      </div>
    </div>
  );
};

export default SideBar;