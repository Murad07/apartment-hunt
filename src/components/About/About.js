import React from 'react';
import Navbar from './../Navbar/Navbar';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center pt-4 brand-color">About Us</h1>
            <div className="container">
                <div className="text-center">
                    <p>Apartment Hunt is a platform for connecting between tenants and homeowners. Here the tenants on one side can find suitable houses for their residence and businessman can find suitable places for their business, on the other hand, the homeowners can rent a house from sit in the house without affix a leaflet</p>
                    <hr/>
                    <br/>
                    <p>Any kinds of property rent or sell advertisement such as house, room, sublet, hostel, office, land etc can give in Apartment Hunt.</p>
                    <p>Use Apartment Hunt to keep your city clean and To save the cost of leaflets</p>
                    <p className="brand-color">Phone: 018XXXXXXXX | Email: xyz@email.com </p>
                </div>
            </div>
        </div>
    );
};

export default About;