import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faPlus, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";
import logo from '../../../logos/logo.png';


const SideBar = ({pag}) => {
  let bL = "black";
  let aH = "black";
  let mR = "black";

  if(pag === "bookingList"){
    bL = "brand-color";
  }else if(pag === "addHouse"){
    aH = "brand-color";
  }else{
    mR = "brand-color";
  }
     
  return (
    <div className="sidebar-container">
      <Link to="/">
      <img
        className="img-thumbnail mb-2" style={{width:'120px', marginLeft:'20px'}}
        src={logo}
        alt=""
      /></Link>      
      <div className="mt-5 pb-sm-5">

          <>
            <Link to="/bookingList">
              <FontAwesomeIcon
                icon={faShoppingCart}
              className={bL}
              ></FontAwesomeIcon>
              &nbsp;&nbsp;
              <span className="d-md-inline-block d-none" className={bL}>Booking List</span>
            </Link>
            <br />
            <Link to="/addHouse">
              <FontAwesomeIcon
               className={aH}
                icon={faPlus}
              ></FontAwesomeIcon>
              &nbsp;&nbsp;
              <span className="d-md-inline-block d-none" className={aH}>Add House</span>
            </Link>
            <br />
            <Link to="/rent">
              <FontAwesomeIcon
              className={mR}
                icon={faHome}
              ></FontAwesomeIcon>
              &nbsp;&nbsp;
              <span className="d-md-inline-block d-none" className={mR}>My Rent</span>
            </Link>
          </>
        

        <br />
      </div>
    </div>
  );
};

export default SideBar;