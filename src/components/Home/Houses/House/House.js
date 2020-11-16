import React from 'react';
import mapIcon from '../../../../logos/map2.png';
import badIcon from '../../../../logos/badIcon.png';
import bathIcon from '../../../../logos/bathIcon.png';
import './House.css';
import { Link } from 'react-router-dom';

const House = ({info}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center px-0 p-md-3">
            
            <Link className='cardLink' to={`/details/${info._id}`}>
                <div className="card-group text-left">
                    <div className="card">
                        {
                            !info.fake ? <img className="card-img-top" src={`data:image/png;base64,${info.img.img}`} alt="Card image cap"/>
                            :
                            <img className="card-img-top" src={info.img} alt="Card image cap"/>
                        }
                        
                        <div className="card-body">
                            <h5 className="brand-color">{info.title}</h5>
                            <p className="card-text"><span><img height="15px" width="10px" src={mapIcon} alt=""/></span> {info.location}</p>
                            <div className="row pt-0 mt-0">
                                <div className="col-6"><span><img width="20px" src={badIcon} alt=""/></span> {info.bedroom} Bedrooms</div>
                                <div className="col-6"><span><img width="20px" src={bathIcon} alt=""/></span> {info.bathroom} Bathrooms</div>
                            </div>
                            <div className="row pt-0 mt-0">
                                <div className="col-6"><h1 className="brand-color">${info.price}</h1></div>
                                <div className="col-6 pt-2"><button className="btn brand-btn">View Details</button></div>
                            </div>
                        </div>
                    </div>    
                </div>
            </Link>
        </div>
    );
};

export default House;