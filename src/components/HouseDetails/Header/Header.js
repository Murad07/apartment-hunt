import React from 'react';
import bgImg from '../../../images/bgImg.png';

const Header = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '350px', backgroundSize: 'cover', backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${bgImg})` }}>
            <h2 className="text-white ">Apartment</h2>
        </div>
    );
};

export default Header;