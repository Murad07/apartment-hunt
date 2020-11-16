import React, { useEffect, useState } from 'react';
import house1 from '../../../../images/house1.png';
import house2 from '../../../../images/house2.png';
import house3 from '../../../../images/house3.png';
import house4 from '../../../../images/house4.png';
import house5 from '../../../../images/house5.png';
import house6 from '../../../../images/house6.png';
import House from '../House/House';
const infos = [
        {
            _id: 1,
            title: "Washington Avenue",
            location: "Nasirabad H/S, Chattogram",
            bedroom: 3,
            bathroom: 4,
            price: 168,
            img: house1,
            fake: true,
        },
        {
            _id: 2,
            title: "Family Apartment Tree",
            location: "Nasirabad H/S, Chattogram",
            bedroom: 3,
            bathroom: 2,
            price: 204,
            img: house2,
            fake: true,
        },
        {
            _id: 3,
            title: "Gorgeous House",
            location: "Nasirabad H/S, Chattogram",
            bedroom: 3,
            bathroom: 2,
            price: 365,
            img: house3,
            fake: true,
        },
        {
            _id: 4,
            title: "Luxury Villy",
            location: "Nasirabad H/S, Chattogram",
            bedroom: 3,
            bathroom: 4,
            price: 265,
            img: house4,
            fake: true,
        },
        {
            _id: 5,
            title: "Epic Huda",
            location: "Nasirabad H/S, Chattogram",
            bedroom: 3,
            bathroom: 3,
            price: 245,
            img: house5,
            fake: true,
        },
        {
            _id: 6,
            title: "Place Park",
            location: "Nasirabad H/S, Chattogram",
            bedroom: 3,
            bathroom: 4,
            price: 302,
            img: house6,
            fake: true,
        },
    ];

const Houses = () => {
    const [houses, setHouses] = useState([])

    // useEffect( () => {
    //     fetch('link-here')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // }, [])

    return (
        <div className="container mt-3">
            <h5 className="brand-color text-center">House Rent</h5>
            <h3 className="brand-color text-center">Discover the latest Rent available today</h3>

            <div className='row mx-3'>
                {
                    houses.length ? houses.map((info, i) => <House key={i} info={info}></House>) :
                    infos.map((info, i) => <House key={i} info={info}></House>)
                }
            </div>
        </div>
    );
};

export default Houses;