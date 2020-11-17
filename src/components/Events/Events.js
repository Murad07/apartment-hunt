import React from 'react';
import Navbar from '../Navbar/Navbar';

const Events = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center pt-4 brand-color">Upcoming Event</h1>
            <div className="container">
                <div className="text-center">
                    <p>No lates event found!</p>
                    <hr/>
                </div>
            </div>
        </div>
    );
};

export default Events;