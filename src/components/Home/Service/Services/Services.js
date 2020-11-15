import React from 'react';
import Service from '../Service/Service';


const infos = [
        {
            title: "Wide Range of Properties",
            desc: "With a rebust selection of popular properties on hands, as well as landing, properties from expart",
            img: "",
            fake: true,
        },
        {
            title: "Financing Made Easy",
            desc: "",
            img: "",
            fake: true,
        },
        {
            title: "Trusted By Thousend",
            img: "",
            fake: true,
        },
    ];

const Services = () => {
   
    return (
        <div className="container mt-3">
            <h5 className="brand-color">Services</h5>
            <h3 className="brand-color">We're an agency tailored to all clients' need that always delivers</h3>

            <div className='row mx-3'>
                {
                    infos.map((info, i) => <Service key={i} info={info}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;