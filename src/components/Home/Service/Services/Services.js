import React from 'react';
import Service from '../Service/Service';
import service1 from '../../../../logos/service1.png';
import service2 from '../../../../logos/service2.png';
import service3 from '../../../../logos/service3.png';


const infos = [
        {
            title: "Wide Range of Properties",
            desc: "With a rebust selection of popular properties on hands, as well as landing, properties from expart",
            img: service1,
            fake: true,
        },
        {
            title: "Financing Made Easy",
            desc: "Our strees-free finance department that can find financial solutions to save your money",
            img: service2,
            fake: true,
        },
        {
            title: "Trusted By Thousend",
            desc: "10 new offers everyday. 350 offers on site, trusted by a comunity of thousands of users.",
            img: service3,
            fake: true,
        },
    ];

const Services = () => {
   
    return (
        <div className="container mt-3" id="service">
            <h5 className="brand-color text-center">Services</h5>
            <h3 className="brand-color text-center">We're an agency tailored to all clients' need that always delivers</h3>

            <div className='row mx-3'>
                {
                    infos.map((info, i) => <Service key={i} info={info}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;