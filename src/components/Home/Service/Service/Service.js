import React from 'react';
import './Service.css';

const Service = ({info}) => {
    
    return (
        <div className="col-md-4 col-sm-6 text-center px-1 p-md-3">
            <div className="card-group">
                <div className="">
                    {
                        !info.fake ? <img className="card-img-top" src={`data:image/png;base64,${info.img.img}`} alt="Card image cap"/>
                        :
                        <img className="card-img-top mx-auto mt-5 cardImg" src={info.img} alt="Card image cap"/>
                    }
                    
                    <div className="card-body">
                        <h5 className="brand-color text-center">{info.title}</h5>
                        <p className="card-text text-center">{info.desc}</p>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Service;