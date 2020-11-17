import React from 'react';
import mapIcon from '../../../logos/map.png';
import faceBook from '../../../logos/Vector.png';
import insta from '../../../logos/Vector-1.png';
import inIcon from '../../../logos/Vector-2.png';
import youIcon from '../../../logos/Vector-3.png';

const Footer = () => {
    return (
        <div className="px-md-5 text-white text-left" style={{ backgroundColor: "#275a53"}}>
            <div className="row px-4 py-4 px-md-5 mx-md-5">
                <div className="col-md-4">
                    <p> <span><img height="15px" width="12px" src={mapIcon} alt=""/></span> House#340 (4th Floor) Road #24 <br/>
                    New DOHS, Mohakhali, Dhaka, Bangladesh <br/>
                    Phone: 018XXXXXXXXX <br/>
                    Email: info@info.com</p>
                </div>
                <div className="col-md-2">
                    <h5>Company</h5>
                    <p>About <br/>
                    Site Map <br/>
                    Support Center <br/>
                    Terms and Condition<br/>
                    Submit Listing</p>
                </div>
                <div className="col-md-2">
                    <h5>Quick Links</h5>
                    <p>Quick Links <br/>
                    Rental <br/>
                    Sales <br/>
                    Contact <br/>
                    Terms Condition <br/>
                    Ours Blog</p>
                </div>
                <div className="col-md-4">
                    <h5>About Us</h5>
                    <p>We are the top real estate agency in Sydney, with agents available to answers any questions 24/7</p>
                    <div>
                        <a href="https://www.facebook.com/raghib.ahsan.96" target="_blank"><img className="pr-3" height="20px" src={faceBook} alt=""/></a>
                        <a href="https://www.instagram.com/murad.hossain.9615/" target="_blank"><img className="pr-3" height="20px" src={insta} alt=""/></a>
                        <a href="https://www.linkedin.com/in/sr-sohan/" target="_blank"><img className="pr-3" height="20px" src={inIcon} alt=""/></a>
                        <a href="https://www.youtube.com/user/jhankarmahbub" target="_blank"><img height="20px" src={youIcon} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;