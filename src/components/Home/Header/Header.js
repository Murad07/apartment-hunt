import React from 'react';
import bgImg from '../../../images/bgImg.png';

const Header = () => {
    return (
        <div className="py-5" style={{ height: '350px', backgroundSize: 'cover', backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${bgImg})` }}>
            <div className="py-5">
                <h2 className="text-white text-center">FIND YOUR HOUSE RENT</h2>
                
                <form className="form-inline d-flex justify-content-center pt-3">
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" placeholder="Search..."/>
                    </div>
                    <button type="submit" className="btn brand-btn mb-2">Find Now</button>
                </form>
            </div>
        </div>
    );
};

export default Header;